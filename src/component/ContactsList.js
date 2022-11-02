import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Contact from "./contact/Contact";

const ContactsList = () => {
    const [contacts, setContacts] = useState([])
    const [filterContact, setFilterContact] = useState(null)
    const [value, setValue] = useState("")

    useEffect(() => {
        axios.get("http://localhost:3001/contacts")
            .then(
                (res) => {
                    setContacts(res.data)
                    setFilterContact(res.data)
                }
            )
            .catch((err) => console.log(err.message))
    }, [])

    const deleteContact = async (id) => {
        try {
            let filterContacts = contacts.filter((c) => c.id !== id)
            setContacts(filterContacts)
            await axios.delete(`http://localhost:3001/contacts/${id}`)
        } catch (err) {
            console.log(err);
        }
    }
    const filterContacts = (e) => {
        setValue(e.target.value)
        const inputVal = e.target.value
        if (inputVal !== "") {
            const filter = filterContact.filter((c) => {
                return Object.values(c)
                    .join(" ")
                    .toLowerCase()
                    .includes(inputVal.toLowerCase())
            })
            setContacts(filter)
        } else {
            setContacts(filterContact)
        }
    }
    return (
        <div className="concat-list">
            <h2>CONTACT LIST</h2>
            <div className="search-box">
                <input type="search" placeholder="search..." onChange={filterContacts} value={value} />
            </div>
            {contacts.map((contact) => (
                <Contact contact={contact} onDelete={deleteContact} key={contact.id} />
            ))}
            < Link to='/addContact' >
                <button className="add-btn">ADD NEW CONTACT</button>
            </Link>
        </div >
    );
}

export default ContactsList;