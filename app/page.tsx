import React from 'react';
import Timer from './components/Timer';
import TodoList from './components/TodoList';
import RandomQuote from './components/RandomQuote';
import './page.css'; // Import the CSS file

const Page: React.FC = () => {
  const embedCode = (component: string) => `<iframe src="https://onlyproductivity.vercel.app/${component}" width="300" height="200"></iframe>`;

  return (
    <div className="page-container">
      <h1>Productivity Widgets</h1>
      <div className="widget-container">
        <div className="widget">
          <h2>Timer</h2>
          <Timer />
          <textarea readOnly value={embedCode('timer')} />
        </div>
        <div className="widget">
          <h2>To-Do List</h2>
          <TodoList />
          <textarea readOnly value={embedCode('todo-list')} />
        </div>
        <div className="widget">
          <h2>Random Quote</h2>
          <RandomQuote />
          <textarea readOnly value={embedCode('random-quote')} />
        </div>
      </div>
    </div>
  );
};

export default Page;