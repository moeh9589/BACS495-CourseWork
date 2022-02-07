import React from "react";


function Card(props) {
  
    return (
      <div>
        {/* <form onSubmit={this.handleSubmit}> */}
          <h1>
            Item: {props.itemName}
          </h1>

          <h1>
              Mark as completed:
              <input name="isCompleted" type="checkbox"  checked={props.isCompleted} />
              {/* onChange={props.this.handleChange} /> */}
          </h1>
          {/* <input type="submit" value="Submit" /> */}
        {/* </form> */}
        </div>
      )
}


export default Card