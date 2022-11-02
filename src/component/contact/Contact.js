import { BiTrash, BiUserCircle } from "react-icons/bi";
import React from 'react';
import { Link } from "react-router-dom";

const Contact = ({ contact, onDelete }) => {
    return (
        <div key={contact.id} className="concat" >
            <Link to={`user/${contact.id}`} state={contact}>
                <div className="concat-info" >
                    <div>{<BiUserCircle />}</div>
                    <p>name:{contact.name}</p>
                    <p>email:{contact.email}</p>
                </div>
            </Link>
            <div className="contact-btns">
                < Link to={`editContact/${contact.id}`} state={contact}>
                    <button className="edit-btn">EDIT</button>
                </Link>
                <button className="delete-btn" onClick={() => onDelete(contact.id)}>
                    {<BiTrash />}
                </button>
            </div>

        </div>
    );
}

export default Contact;