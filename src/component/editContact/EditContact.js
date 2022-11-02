
import axios from "axios";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const EditContact = () => {
    // const [contacts, setContacts] = useState([])
    const { state } = useLocation()
    const navigate = useNavigate()
    const [user, setUser] = useState({ name: state.name, email: state.email });

    const changeHandler = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value })
    }
    const submitHandler = async (e) => {
        e.preventDefault()
        try {
            await axios.put(`http://localhost:3001/contacts/${state.id}`, {
                id: state.id,
                name: user.name,
                email: user.email,
            });
            navigate('/')
        } catch (error) {
            console.log(error);
        }

    }
    return (
        <div className="edit-form">
            <h2>EDIT CONTACT</h2>
            <form onSubmit={submitHandler}>
                <div className="formControl">
                    <label>name</label>
                    <input type="text" name="name" value={user.name} onChange={changeHandler} />
                </div>
                <div className="formControl">
                    <label>Email</label>
                    <input type="email" name="email" value={user.email} onChange={changeHandler} />
                </div>
                <button type="submit">EDIT CONTACT</button>
            </form>
        </div>
    );
}

export default EditContact;
