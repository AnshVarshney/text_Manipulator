import React from 'react'

export default function Alert(props) {

    const capitalize = (msg) => {
        let l = msg.toLowerCase();
        return l.charAt(0).toUpperCase() + l.slice(1);
    }

    return (
        <div className="container" style={{ height: '60px'}}>
            {props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
                <strong>{capitalize(props.alert.type)}</strong> : {props.alert.message}
            </div>}
        </div>
    )
}
