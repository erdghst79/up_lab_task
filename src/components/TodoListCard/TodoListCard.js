import React from 'react';
import { Card, CardBody, Table } from 'reactstrap';
import { TodoItem } from 'components';
import PropTypes from 'prop-types';
import TodoListHeader from './TodoListHeader';

const TodoListCard = ({ todos, actions, title, onToggleItem, onRemoveItem }) => (
  <Card className="card-tasks">
    <TodoListHeader title={`${title} (${todos.length})`} actions={actions} />
    <CardBody>
      <div className="table-full-width table-responsive">
        <Table>
          <tbody>
            {todos.map((item) => (
              <TodoItem
                key={item._id}
                {...item}
                onChange={() => onToggleItem(item._id)}
                onRemove={() => onRemoveItem(item._id)}
              />
            ))}
          </tbody>
        </Table>
      </div>
    </CardBody>
  </Card>
);

TodoListCard.propTypes = {
  title: PropTypes.string,
  actions: PropTypes.arrayOf(PropTypes.shape({})),
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string,
      message: PropTypes.string,
      dueDate: PropTypes.number,
      open: PropTypes.bool,
    }),
  ).isRequired,
  onToggleItem: PropTypes.func.isRequired,
};

TodoListCard.defaultProps = {
  title: 'Todos',
  actions: [],
};

export default TodoListCard;
