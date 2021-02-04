import React, {useContext} from 'react';
import {CSSTransition} from 'react-transition-group'
import { AlertContext } from '../context/alert/alertContex';

export const Alert = () => {
    const {alert, hide} = useContext(AlertContext)

    return (
        <CSSTransition in={alert.visible} timeout={{enter: 750, exit: 350}} classNames={'alert'} mountOnEnter unmountOnExit>
            <div className={`alert alert-${alert.type || 'warning'} alert-dismissible fade show`} role="alert">
            <strong>{alert.text}</strong>
            <button onClick={hide} type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close">&times;</button>
            </div>
        </CSSTransition>
    )
}