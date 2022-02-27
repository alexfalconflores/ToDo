import React from "react";
import './CreateToDoButton.css';

function CreateToDoButton(props) {
    const onClickButton = () => {
        props.setOpenModal(!props.openModal);
    }
    return (
        <button className="CreateToDoButton" onClick={onClickButton}>+</button>
    );
}

export { CreateToDoButton };