import React, {useState} from "react";
import './Body.css';

function Body() {
    const [name, setName] = useState(0);


    return (
        <div className='Body'>
            <p>
            <input value={name} onInput={e=> setName(e.target.value)}/>

            Name is set to: {name}
            </p>
        </div>
    )
}

export default Body