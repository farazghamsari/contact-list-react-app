import { BiUserCircle } from "react-icons/bi";
import React from 'react';
import { useLocation } from "react-router-dom";

const ContactInfo = (props) => {
    const { state } = useLocation()
    console.log(state);
    return (
        <div className="concatInfo">
            <div>{<BiUserCircle />}</div>
            <p>name : {state.name}</p>
            <p>email : {state.email}</p>
        </div>
    );
}

export default ContactInfo;