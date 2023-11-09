import './assets/App.css';
import { License } from './components/License';
import { ToDoList } from './components/ToDoList';
import { Header } from './components/Header';
import { Pictures } from './components/Pictures';

function App() {
  return (
    <div className="main">
      <Header/>
      <Pictures/>
      <ToDoList/>
      <License/>
    </div>
  );
}

export default App;
