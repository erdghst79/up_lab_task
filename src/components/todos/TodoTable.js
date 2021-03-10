import React from 'react';
import Todo from 'models/Todo';
import { toast } from 'react-toastify';
import { Table } from 'reactstrap';
import TodoDataService from 'services/TodoDataService';
import TodoItem from './TodoItem';

export default function TodoTable({ todos }) {
  const handleRemoveTodo = React.useCallback((_id) => {
    TodoDataService.remove(_id);
  }, []);

  if (!todos.length) return <div>No todos in your list</div>;

  const handleToggleTodo = React.useCallback(async (_id) => {
    try {
      const todo = TodoDataService.findOne({ _id });
      const updated = todo.open ? Todo.close(todo) : Todo.reopen();
      await TodoDataService.update(_id, updated);
    } catch (error) {
      toast.error(error.message);
    }
  }, []);

  return (
    <div className="table-full-width table-responsive">
      <Table>
        <tbody>
          {todos.map((item) => (
            <TodoItem
              key={item._id}
              {...item}
              onChange={() => handleToggleTodo(item._id)}
              onRemove={() => handleRemoveTodo(item._id)}
            />
          ))}
        </tbody>
      </Table>
    </div>
  );
}
