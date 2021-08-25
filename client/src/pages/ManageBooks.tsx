import React, {useContext, useEffect} from 'react';
import NavBar from '../components/NavBar';
import {BookContext} from '../context/bookContext';
import useFindBook from '../hooks/useFindBook';
import {Redirect, useParams} from 'react-router-dom';
import {constants} from '../constants/constants';
import useForm from '../hooks/useForm';


const ManageBooks = () => {
    const { bookMode,setBookMode, redirect } = useContext(BookContext)
    let { id } = useParams<{ id: string }>();
    const {getBook} = useFindBook()
    const { handleChange, handleSubmit, values, setValues, titleError, authorError, isbnError } = useForm()

    useEffect(() => {
        const data = id && getBook(+id)
        id && data.then((data: any) => setValues(data))
    }, [id])

    useEffect(() => {
        (id !== undefined) && setBookMode && setBookMode(true)
    }, [id, setBookMode])

    return redirect ?
        (
            <Redirect to='/'/>
        ) : (
        <>
            <NavBar />
            <form className='container' onSubmit={(event) => handleSubmit(event, id)}>
                <div className='my-3'>
                    <h1>{bookMode ? constants.manageBook.edit : constants.manageBook.add }</h1>
                </div>
                <div className="mb-3">
                    <label htmlFor="formGroupExampleInput" className="form-label">Title</label>
                    <input
                        type="text"
                        required
                        value={values.title}
                        onChange={handleChange}
                        className={titleError.status ? "form-control" : "form-control border-danger"}
                        placeholder="Title"
                        name='title'
                        id="formGroupExampleInput"
                      />
                </div>
                <div className="mb-3">
                    <label htmlFor="formGroupExampleInput2" className="form-label">Author</label>
                    <input
                        type="text"
                        required
                        value={values.author}
                        className={authorError.status ? "form-control" : "form-control border-danger"}
                        id="formGroupExampleInput2"
                        placeholder="Author"
                        name="author"
                        onChange={handleChange}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="formGroupExampleInput3" className="form-label">ISBN</label>
                    <input
                        type="text"
                        required
                        value={values.isbn}
                        className={isbnError.status ? "form-control" : "form-control border-danger"}
                        id="formGroupExampleInput3"
                        placeholder="ISBN"
                        name="isbn"
                        onChange={handleChange}
                    />
                </div>
                <button
                    type="submit"
                    className="btn btn-success"
                >{bookMode ? constants.manageBook.button.change : constants.manageBook.button.add }</button>
            </form>
        </>
    )
};

export default ManageBooks;