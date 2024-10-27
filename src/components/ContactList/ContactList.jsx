import { useDispatch, useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import module from "./ContactList.module.css";
import { deleteContact } from "../../redux/contactsSlice";

const ContactList = () => {

    const selectNameFilter = useSelector((state) => state.filter.filter);
    const selectContacts = useSelector((state) => state.contacts.contacts);
    const dispatch = useDispatch();

    const filteredContacts = selectContacts.filter(contact =>
        contact.name.toLowerCase().includes(selectNameFilter.toLowerCase().trim())
    );

    const onDeleteContact = (contactId) => {
        const action = deleteContact(contactId);
        dispatch(action);
    }

    return (
        <ul className={module.list}>
            {filteredContacts.map((contact) =>
                <li className={module.listItem} key={contact.id}>
                    <Contact onDeleteContact={onDeleteContact} id={contact.id} name={contact.name} number={contact.number} />
                </li>
            )}
        </ul>
    )
}

export default ContactList