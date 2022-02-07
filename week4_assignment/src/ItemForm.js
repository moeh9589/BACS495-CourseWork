import React from "react";
import './ItemForm.css';
import Card from "./Card";

class ItemForm extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
          isCompleted: false,
          cardName:this.props.itemName
        };
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleChange(event) {
        const target = event.target;

        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({[name]: value});
    }
  
    handleSubmit(event) {
      alert('An item was submitted: ' + this.state.itemName);
      event.preventDefault();
    }


  
    render() {
      return (
          <div>
            <Card itemName={this.state.cardName}/>

          </div>
      );
    }
  }

  export default ItemForm