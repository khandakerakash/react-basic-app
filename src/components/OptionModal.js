import React from 'react';
import Modal from 'react-modal';

const OptionModal = (props) => (
    <Modal
        isOpen = {!!props.optionSelected}
        onRequestClose = {props.handleClearOptionSelected}
        closeTimeoutMS={200}
        className="modal"
        contentLabel = "Selected Option"
    >
        <h3 className="modal__title">Selected Option</h3>
        {props.optionSelected && <p className="modal__body">{props.optionSelected}</p>}
        <button
            className="btn"
            onClick={props.handleClearOptionSelected}
        >
            Okay
        </button>
    </Modal>
);

export default OptionModal;