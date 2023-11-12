// import logo from './logo.svg';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
import './App.css';

function App() {
  return (
    <div className='mt-20'>
    <TaskForm />
    <TaskList />
  </div>
  );
}

export default App;
