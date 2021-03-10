import React, { Fragment } from 'react';
import useLiveTodos from 'hooks/todos/useLiveTodos';
import TodoListCard from '../components/todos/TodoListCard';
import TodoForm from '../components/todos/TodoForm';

export default function HomePage() {
  const [activeStatus, setActiveStatus] = React.useState('open');
  const todos = useLiveTodos({ status: activeStatus });
  return (
    <>
      <TodoForm />
      <TodoListCard title="All Todos" {...{ todos, activeStatus, setActiveStatus }} />
    </>
  );
}
