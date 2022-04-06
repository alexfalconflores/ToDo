import React from "react";

function withStorageListener(WrappedComponent) {
    return function WrappedComponentWithStorageListener(props) {
        const [storageChange, setStorageChange] = React.useState(false);
        window.addEventListener('storage', (change) => {
            if (change.key === 'TODOS_V1') {
                console.log('storage changed');
                setStorageChange(true);
            }
        });

        const toggleShow = (show) => {
            props.synchronize();
            setStorageChange(false);
        }

        return (
            <WrappedComponent
                {...props}
                show={storageChange}
                toggleShow={toggleShow}
            />);
    }
}
export { withStorageListener };