import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from '../Redux/contactsSlice';
import { Contact } from "../Element/Element";

export const ContactList = () => {
    const persons = useSelector(state => state.contacts.data);
    const dispatch = useDispatch();

    const handleDeleteContact = (elementId) => {
        dispatch(deleteContact(elementId));
    }

    return (
        <ul>
            {persons.map(person => (
                <li key={person.id}>
                    <Contact info={person} toDelete={handleDeleteContact} />
                </li>
            ))}
        </ul>
    );
};





// import React from "react";
// import { Contact } from "Element/Element";

// export const ContactList = ({ persons, toDelete }) => {
//     return (
//         <ul>{persons.map(person => (
//             <li key={person.id}>
//                 <Contact info={person} toDelete={toDelete} />
//             </li>
//         ))}
//         </ul>)
// }