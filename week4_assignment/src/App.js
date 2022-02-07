import logo from './logo.svg';
import './App.css';
import Header from './header';
import ToDoList from './ToDoList';
import Footer from './footer';

function App() {
  return (
    <div className="App">
      <Header />
      <ToDoList />
      <Footer/>
    </div>
  );
}

export default App;
