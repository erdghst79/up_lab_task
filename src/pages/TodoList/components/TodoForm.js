import React from 'react';
import { Button, Card, CardBody, Input, InputGroupAddon, InputGroup } from 'reactstrap';
import DatePicker from 'components/common/DatePicker';
import _ from 'lodash';
import TodoDataService from 'services/TodoDataService';
import Todo from 'models/Todo';
import { toast } from 'react-toastify';

const createTodo = async (values) => {
  try {
    const todo = Todo.init(values);
    await TodoDataService.insert(todo);
  } catch (error) {
    toast.error(error.message);
  }
};

const defaultState = {
  message: '',
  dueDate: undefined,
};
const TodoForm = ({ submitButtonLabel = 'Add +' }) => {
  const [message, setMessage] = React.useState(defaultState.message);
  const [dueDate, setDueDate] = React.useState(defaultState.dueDate);

  const submittable = message.length > 3;

  const handleSubmit = (e) => {
    e.preventDefault();
    createTodo({ message, dueDate: dueDate ? dueDate.toDate().getTime() : dueDate });
    setMessage(defaultState.message);
    setDueDate(defaultState.dueDate);
  };

  return (
    <Card className="TodoForm">
      <CardBody>
        <form onSubmit={handleSubmit}>
          <InputGroup size="lg">
            <Input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Describe your task..."
            />
            <InputGroupAddon addonType="append">
              <DatePicker
                date={dueDate}
                onChange={(value) => setDueDate(_.isNil(value) ? undefined : value)}
                placeholder=""
                noBorder
              />
              <Button type="submit" color="default" disabled={!submittable}>
                {submitButtonLabel}
              </Button>
            </InputGroupAddon>
          </InputGroup>
        </form>
      </CardBody>
    </Card>
  );
};

export default TodoForm;
