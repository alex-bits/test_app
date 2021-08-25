import React, {useContext, useEffect} from 'react';
import {IBaseData} from '../interfaces/IBooksState';
import {BookContext} from '../context/bookContext';
import {Link} from 'react-router-dom';
import useEditBook from '../hooks/useEditBook';

interface IMainTableProps {
    data: IBaseData[] | undefined
}


const MainTable = ({data}: IMainTableProps) => {
    const {setBookMode, books, setBooks, setRedirect} = useContext(BookContext)
    const { deleteBook } = useEditBook()

    useEffect(() => {
        setRedirect && setRedirect(false)
        setBookMode && setBookMode(false)
    })

    const editHandler = (id: string | number | [] ) => {
        setBookMode && setBookMode(true)
    }

    const deleteHandler = (id: string | number) => {
        deleteBook(id)
        books && setBooks( books?.filter(elem => elem.id !== +id) )
    }

    return (
        <table className="table container mt-3">
            <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">Title</th>
                <th scope="col">Author</th>
                <th scope="col">ISBN</th>
                <th scope="col">Controls</th>
            </tr>
            </thead>
            <tbody>
            {data?.map((element, index) => {
                return  (
                    <tr key={index}>
                        <th scope="row">{index}</th>
                        <td>{element.title}</td>
                        <td>{element.author}</td>
                        <td>{element.isbn}</td>
                        <td>
                            <Link
                                to={`/manage/${element.id}`}
                                className="btn btn-primary mr-2"
                                onClick={() => editHandler(element.id)}
                            >
                                Edit
                            </Link>
                            <button type="button" className="btn btn-danger" onClick={() => deleteHandler(+element.id)}>Delete</button>
                        </td>
                    </tr>
                )
            })}
            </tbody>
        </table>
    );
};

export default MainTable;