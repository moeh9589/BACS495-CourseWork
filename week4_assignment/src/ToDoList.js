import React from "react";
import './ToDoList.css';
import ItemForm from "./ItemForm";
import Card from "./Card";


class ToDoList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
        isCompleted: false, 
        items: [],
        itemName: 'asdasdas'
        
      };
    }

    
      saveInput = (e) => {
        this.setState({ input: e.target.value });
        // this.setState(itemName = this.state.itemName);
        
      };

      saveName = (e) => {
        this.setState({itemName: e.target.value});
      }
    
      addNewItem = () => {
        this.setState({items: [...this.state.items, this.state.input]});

        // this.state.cart.push(this.state.input); // same as above, though bad practice 
      };
    
      render() {
        return (
          <div className="">
              <div className="inputbox">
              <h1>Add an Item</h1>
            <input
              type="text"
              onChange={this.saveName}
            />
            <button onClick={this.addNewItem}> Add Item </button>
            </div>
            <ol className="container">
              {this.state.items.map((subItems, sIndex) => {
                return <li class='box' key={sIndex}> <ItemForm itemName={this.state.itemName}/></li>
              })}
            </ol>
          </div>
        );
      }
  


    // render () {
    //     return (
    //         <div className="ToDoList">
    //             <h1>To Do List</h1>

    //             <div className='container'> 
    //                 <div className='box'> <ItemForm/></div>
    //                 <div className='box'> <ItemForm/></div>
    //                 <div className='box'> <ItemForm/></div>
    //                 <div className='box'> <ItemForm/></div>
    //                 <div className='box'> <ItemForm/></div>
    //             </div>
    //         </div>
    //     );
    // }
    
}

export default ToDoList