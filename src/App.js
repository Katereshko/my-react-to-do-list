import './App.css';
import { License } from './License';
import { ToDoList } from './ToDoList';
import { Header } from './Header';
import { Pictures } from './Pictures';

function App() {
  return (
    <div>
      <Header/>
      <Pictures/>
      <ToDoList/>
      <License/>
    </div>
  );
}

export default App;
