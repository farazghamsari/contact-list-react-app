import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


const AddContactForm = () => {
    const [user, setUser] = useState({ name: "", email: "" });
    const [contacts, setContacts] = useState([])

    let navigate = useNavigate()

    const changeHandler = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value })
    }

    const submitHandler = async (e) => {
        e.preventDefault()
        if (!user.name || !user.email) {
            alert("all field should be complete")
            return;
        }
        try {
            setContacts([...contacts, { id: Math.ceil(Math.random() * 100), ...user }])
            await axios.post("http://localhost:3001/contacts", user)
        } catch (err) {
            console.log(err);
        }
        setUser({ name: "", email: "" });

        navigate("/")
    }
    return (
        <div className="add-form">
            <h2>ADD CONTACT</h2>
            <form onSubmit={submitHandler}>
                <div className="formControl">
                    <label>name</label>
                    <input type="text" onChange={changeHandler} name="name" value={user.name} />
                </div>
                <div className="formControl">
                    <label>Email</label>
                    <input type="email" onChange={changeHandler} name="email" value={user.email} />
                </div>
                <button type="submit">ADD CONTACT</button>
            </form>
        </div>

    );
}

export default AddContactForm;