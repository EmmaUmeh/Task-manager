// import logo from './logo.svg';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
import './App.css';

function App() {
  return (
    <div className='mt-20'>
    <TaskForm />
    <div className='mt-10'>
      <TaskList />
    </div>
  </div>
  );
}

export default App;
