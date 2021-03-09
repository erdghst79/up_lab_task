import React from 'react';
import { Card, CardBody, Table } from 'reactstrap';
import _ from 'lodash';
import PropTypes from 'prop-types';
import TodoDataService from 'services/TodoDataService';
import Todo from 'models/Todo';
import { toast } from 'react-toastify';
import TodoItem from './TodoItem';
import TodoListHeader from './TodoListHeader';

const useLiveTodos = (status) => {
  const fetchDataByStatus = (s) => {
    let todos = [];
    switch (s) {
      case 'close':
        todos = TodoDataService.getClose();
        break;
      case 'open':
        todos = TodoDataService.getOpen();
        break;
      case 'all':
        todos = TodoDataService.getAll();
        break;
      default:
        todos = TodoDataService.getOpen();
    }

    return _.orderBy(todos, '_createdAt', 'desc');
  };

  const [data, setData] = React.useState(() => fetchDataByStatus(status));
  const statusRef = React.useRef(status);

  React.useEffect(() => {
    statusRef.current = status;
    setData(fetchDataByStatus(status));
  }, [status]);

  React.useEffect(() => {
    const clearListener = TodoDataService.listenChanges(() => setData(fetchDataByStatus(statusRef.current)));
    return clearListener;
  }, []);

  return data;
};

const useStatusFilter = () => {
  const [activeStatus, setActiveStatus] = React.useState('open');
  const actions = [
    {
      title: 'Show all',
      action: () => setActiveStatus('all'),
    },
    {
      title: 'Show open',
      action: () => setActiveStatus('open'),
    },
    {
      title: 'Show closed',
      action: () => setActiveStatus('close'),
    },
  ];
  return { activeStatus, actions };
};

const TodoListCard = ({ title }) => {
  const { activeStatus, actions } = useStatusFilter();
  const todos = useLiveTodos(activeStatus);

  const handleRemoveTodo = React.useCallback((_id) => {
    TodoDataService.remove(_id);
  }, []);

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
    <Card className="card-tasks">
      <TodoListHeader title={`${todos.length} ${title} (${activeStatus})`} actions={actions} />
      <CardBody>
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
      </CardBody>
    </Card>
  );
};

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
