import React from 'react';
import TodoList from '../components/TodoList';

const TodoListPage: React.FC = () => {
  return (
    <div className="widget-page">
      <TodoList />
    </div>
  );
};

export default TodoListPage;