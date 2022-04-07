import React from "react";
import { withStorageListener } from "./withStorageListener";
import { Modal } from '../Modal';

import './ChangeAlert.css';

function ChangeAlert({ show, toggleShow }) {
    if (show) {
        return (
            <Modal>
                <div className="footer">
                    <div>
                        <p>It looks like you changed your TODOs in another browser tab or window.</p>
                        <p>Want to sync your TODOs?</p>
                        <button onClick={() => toggleShow(false)}>Yes! Reload information</button>
                    </div>
                </div>
            </Modal>
        )
    }
    else {
        return (
            null
        )
    }
}

const ChangeAlertWithStorageListener = withStorageListener(ChangeAlert);

export { ChangeAlertWithStorageListener };