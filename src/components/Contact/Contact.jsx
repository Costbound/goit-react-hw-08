import css from "./Contact.module.css";
import { IoPersonSharp } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { useState } from "react";
import DeleteModal from "../DeleteModal/DeleteModal";

export default function Contact({ data: { name, number, id } }) {
  const [isOpenModal, setIsOpenModal] = useState(false);

  const handleCloseModal = () => {
    setIsOpenModal(false);
  };

  return (
    <li className={css.item}>
      <div>
        <p className={css.para}>
          <IoPersonSharp size="18" />
          {name}
        </p>
        <p className={css.para}>
          <FaPhoneAlt size="17" />
          {number}
        </p>
      </div>
      <button
        className={css.button}
        type="button"
        onClick={() => setIsOpenModal(true)}
      >
        Delete
      </button>
      {isOpenModal && (
        <DeleteModal id={id} name={name} onClose={handleCloseModal} />
      )}
    </li>
  );
}
