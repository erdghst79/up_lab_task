import { Todos as TodosCollection } from 'collections';
import EventEmitter from 'events';
import Todo from 'models/Todo';

const _withPersistAfterAction = (callback) => async (...args) => {
  await callback(...args);
  TodosCollection.persist();
};

class TodoDataService extends EventEmitter {
  collection = TodosCollection;

  getAll = () => this.collection.find();

  getClose = () => this.collection.find({ open: false });

  getOpen = () => this.collection.find({ open: true });

  findOne = (selector) => this.collection.findOne(selector);

  update = _withPersistAfterAction(async (_id, doc) => {
    await Todo.validate(doc);
    const updated = await this.collection.updateOne({ _id }, doc);
    this.emit('update', updated);
  });

  remove = _withPersistAfterAction(async (_id) => {
    await this.collection.remove({ _id });
    this.emit('remove', { _id });
  });

  insert = _withPersistAfterAction(async (doc) => {
    await Todo.validate(doc);
    const _id = await this.collection.insert(doc);
    this.emit('insert', { _id, ...doc });
  });

  listenChanges = (cb) => {
    const types = ['insert', 'remove', 'update'];
    types.forEach((eventType) => {
      this.on(eventType, cb);
    });
    return () => {
      types.forEach((eventType) => {
        this.off(eventType, cb);
      });
    };
  };
}

export default new TodoDataService();
