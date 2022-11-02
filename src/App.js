import { Routes, Route, BrowserRouter } from 'react-router-dom'
import AddContactForm from "./component/AddContactForm";
import ContactsList from "./component/ContactsList";
import "./App.css"
import ContactInfo from "./component/contact-info/ContactInfo";
import EditContact from "./component/editContact/EditContact";
const App = () => {

    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="user/:id"
                        element={<ContactInfo />}
                    />
                    <Route path="/editContact/:id"
                        element={<EditContact />}
                    />
                    <Route path="/addContact"
                        element={<AddContactForm />}
                    />
                    <Route path="/"
                        element={<ContactsList />}
                    />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;