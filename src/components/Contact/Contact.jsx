import { PiUser, PiPhone } from "react-icons/pi";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsOps";

import css from "./Contact.module.css";

export default function Contact({ contact }) {
  const dispatch = useDispatch();

  const handleDelContat = () => {
    dispatch(deleteContact(contact.id));
  };
  return (
    <>
      <div className={css.contactItemWrapper}>
        <p className={css.contactItemInfo}>
          <PiUser size={24} />
          {contact.name}
        </p>
        <p className={css.contactItemInfo}>
          <PiPhone size={24} />
          {contact.number}
        </p>
      </div>
      <button
        className={css.contactBtnDelete}
        type="button"
        onClick={handleDelContat}
      >
        Delete
      </button>
    </>
  );
}
