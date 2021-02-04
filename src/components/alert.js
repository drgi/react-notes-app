import React, {useContext} from 'react';
import { AlertContext } from '../context/alert/alertContex';

export const Alert = () => {
    const {alert, hide} = useContext(AlertContext)

    if (!alert.visible) {
        return null
    }
    return (
        <div className={`alert alert-${alert.type || 'warning'} alert-dismissible fade show`} role="alert">
        <strong>{alert.text}</strong>
        <button onClick={hide} type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close">&times;</button>
        </div>
    )
}