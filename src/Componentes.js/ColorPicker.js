import React, { useState } from 'react';

const ColorPicker = () => {
    const [color,setColor]=useState("")

    return ( 
    <div style={{background:color,height: "500px"}} className="position-relative">
        <div className="bg-white w-25 position-absolute top-50 start-50 translate-middle pb-4 pt-4 rounded-1">
            <h4 className="ms-5">Color Picker</h4>
            <input type="color" onChange={(e)=>setColor(e.target.value)} className="ms-5 me-2"></input>
            <input type="text"value={color}/> 
        </div>
    </div> );
}
 
export default ColorPicker;