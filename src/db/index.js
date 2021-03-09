import minimongo from 'minimongo';
import EventEmitter from 'events';
import addCollections from './collections';

class DB {
  constructor({ options }) {
    this.onInit(({ success, db }) => {
      if (success) addCollections(db);
    });
    this.options = options;
  }

  ee = new EventEmitter();

  instance = null;

  initialized = false;

  initEmitResult = null;

  static eventTypes = {
    INIT: 'INIT',
  };

  reset() {
    this.initEmitResult = null;
    this.instance = null;
    this.initialized = false;
  }

  init(options = this.options) {
    return new Promise((resolve, reject) => {
      this.reset();
      minimongo.utils.autoselectLocalDb(
        options,
        (db) => {
          this.initialized = true;
          this.instance = db;
          this.initEmitResult = {
            success: true,
            db,
            error: null,
          };
          this.ee.emit(DB.eventTypes.INIT, this.initEmitResult);
          resolve(db);
        },
        (error) => {
          this.initialized = true;
          this.instance = null;
          this.initEmitResult = {
            success: false,
            db: null,
            error: typeof error === 'string' ? error : error?.message,
          };
          console.error(error);
          this.ee.emit(DB.eventTypes.INIT, this.initEmitResult);
          reject(error);
        },
      );
    });
  }

  onInit = (cb) => {
    if (this.initialized) cb(this.initEmitResult);
    this.ee.on(DB.eventTypes.INIT, cb);
    return () => this.ee.off(DB.eventTypes.INIT, cb);
  };
}

export default new DB({ options: { namespace: 'bootcamp-todos' } });
