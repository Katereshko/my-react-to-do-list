import './App.css';
import { License } from './License';
import { ToDoList } from './ToDoList';
import { Header } from './Header';

function App() {
  return (
    <div>
      <Header/>
      <ToDoList/>
      <License/>
    </div>
  );
}

export default App;
