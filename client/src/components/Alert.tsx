import React, {FC, useEffect} from 'react';
import ReactDOM from 'react-dom';
import useNotification from '../hooks/useNotification';

type TProps = {
    [value: string]: any
}

const Alert: FC<TProps> = () => {
    const {notification,setNotification} = useNotification()
    const type = notification.type === 'error' ? 'alert-danger-custom' : 'alert-success-custom'
    useEffect(() =>{
        const timer = setTimeout(() => {
            setNotification({...notification, show: false})
        }, notification.timeout)

        return () => clearTimeout(timer)
    }, [notification ,setNotification])
    return ReactDOM.createPortal(
        <div role='alert' className={`alert-custom d-flex justify-content-between mb-3 ${notification.show && 'trsf-default'} ${type}`}>
            <div className="alert-custom__message mr-2 fw-bold">
                { notification.message}
            </div>
        </div>,
        document.querySelector('#portal-modal') as Element)

}

export default Alert;