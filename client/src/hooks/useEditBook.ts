import axios from 'axios';
import {constants} from '../constants/constants';
import {IBaseData} from '../interfaces/IBooksState';
import {useContext} from 'react';
import {BookContext} from '../context/bookContext';

const useEditBook = () => {
    const {books, setBooks, setRedirect} = useContext(BookContext)

    const addBook = async (data: IBaseData, redirect?: boolean) =>{
        axios.post(
            `${constants.path.url}`,
            {title: data?.title, author: data?.author, isbn: data?.isbn}
        )
            .then( updatedBook => {
                books && setBooks([...books, updatedBook.data])
                setRedirect && setRedirect(!!redirect)
            } )
            .catch(error => console.log(error))
    }

    const updateBook = (id: number | string, redirect: string | boolean, data: IBaseData, ) =>
        axios.patch(
            `${constants.path.url}/${+id}`,
            {title: data?.title, author: data?.author, isbn: data?.isbn}
        )
            .then( updatedBook => {
                books && setBooks(books?.map(elem => elem.id === +id ? updatedBook.data : elem))
                setRedirect && setRedirect(!!redirect)
                console.log(redirect)
            })
            .catch(error => console.log(error))

    const deleteBook = (id: number | string) =>
        axios.delete(`${constants.path.url}/${+id}`)
            .then(result => result)
            .catch(error => console.log(error))

    return {updateBook, addBook, deleteBook}
}
export default useEditBook;