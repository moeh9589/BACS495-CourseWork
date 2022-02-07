import React from "react";
import './card.css'

function Card(props) {
  
    return (
      <div>
        {/* <form onSubmit={this.handleSubmit}> */}
          <h1>
            {props.itemName}
          </h1>

          <h2>
              Mark as completed:
              <input className="bigcheckbox" type="checkbox"  checked={props.isCompleted} />
              <span className="checkmark"></span>
              {/* onChange={props.this.handleChange} /> */}
          </h2>
          {/* <input type="submit" value="Submit" /> */}
        {/* </form> */}
        </div>
      )
}


export default Card