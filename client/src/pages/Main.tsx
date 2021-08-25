import React, {useContext} from 'react';
import NavBar from '../components/NavBar';
import MainTable from '../components/MainTable';
import {BookContext} from '../context/bookContext';

const Main = () => {
    const {books} = useContext(BookContext)
    return (
        <div className='main'>
            <NavBar />
            <MainTable data={books} />
        </div>
    );
};

export default Main;