import React, {useState} from 'react';
import useBooksManager from './useEditBook';
import {IBaseData} from '../interfaces/IBooksState';
import useNotification from './useNotification';

const useForm = () => {
    const { updateBook, addBook } = useBooksManager()
    const [values, setValues] = useState<IBaseData>({title: '', author: '', isbn: ''})
    const [titleError, setTitleError] = useState({message: 'Title must have 3 symbols minimum', status: true})
    const [authorError, setAuthorError] = useState({message: 'Author must have 3 symbols minimum', status: true})
    const [isbnError, setIsbnError] = useState({message: 'Isbn must have 3 symbols minimum', status: true})
    const {showNotification} = useNotification();

    const handleChange = (event: React.ChangeEvent<{name: string, value: string}>) => {
        const {name, value} = event.target;
        setValues({
            ...values,
            [name]: value
        })
    }

    const handleSubmit = (event: React.FormEvent, id: string):void => {
        event.preventDefault()
        if(validate(values)){
            id && updateBook(id, true, values)
            !id && addBook(values, true)
            showNotification(true, 'Success!', 3000, 'success')
        }
    }

    const validate = (state: any) => {
        if(state.title.length < 3){
            setTitleError({ ...titleError, status: false } )
            showNotification(true, titleError.message, 5000, 'error')
        } else {
            setTitleError({ ...titleError, status: true } )
        }
        if(state.author.length < 3){
            setAuthorError({ ...authorError, status: false } )
            showNotification(true, authorError.message, 5000, 'error')
        } else {
            setAuthorError({ ...authorError, status: true } )
        }
        if(state.isbn.length < 3){
            setIsbnError({ ...isbnError, status: false } )
            showNotification(true, isbnError.message, 5000, 'error')
        } else {
            setIsbnError({ ...isbnError, status: true } )
        }
        return (titleError.status && authorError.status && isbnError.status);
    }

    return {handleChange, values, handleSubmit, setValues, titleError, authorError, isbnError}

}

export default useForm