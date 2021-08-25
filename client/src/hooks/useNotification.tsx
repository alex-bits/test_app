import {useContext} from 'react';
import {BookContext} from '../context/bookContext';

const UseNotification = () => {
    const {notification, setNotification} = useContext(BookContext)

    const showNotification = (show: boolean, message: string, timeout: number, type: string):void =>
        setNotification({show, message, timeout, type})

    return {showNotification, notification, setNotification}
};

export default UseNotification;