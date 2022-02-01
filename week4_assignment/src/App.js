import logo from './logo.svg';
import './App.css';
import Header from './header';
import ToDoList from './ToDoList';
import Body from './Body';
import Blocks from './Blocks';

function App() {
  return (
    <div className="App">
      <Header />
      <Body />
      <Blocks />
      <ToDoList />
      
    </div>
  );
}

export default App;
