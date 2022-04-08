import React from "react";

function useStorageListener(synchronize) {
    const [storageChange, setStorageChange] = React.useState(false);
    window.addEventListener('storage', (change) => {
        if (change.key === 'TODOS_V1') {
            console.log('storage changed');
            setStorageChange(true);
        }
    });

    const toggleShow = (show) => {
        synchronize();
        setStorageChange(false);
    }

    return {
        show: storageChange,
        toggleShow,
    };
}

export { useStorageListener };