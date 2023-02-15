import PropTypes from 'prop-types';

import {
  Contact,
  ContactName,
  ContactNumber,
  DeleteButton,
  List,
} from './ContactList.styled';

const ContactList = ({ contacts, onDelete }) => {
  return (
    <List>
      {contacts.map(contact => {
        const { id, name, number } = contact;
        return (
          <Contact key={id} id={id}>
            <ContactName>{name}</ContactName>
            <ContactNumber>{number}</ContactNumber>
            <DeleteButton type="button" onClick={onDelete}>
              Delete
            </DeleteButton>
          </Contact>
        );
      })}
    </List>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  onDelete: PropTypes.func.isRequired,
};

export default ContactList;
