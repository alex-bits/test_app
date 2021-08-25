import React, {useEffect, useState} from 'react';
import {IBaseData, IContextData, IBooksPropsProvider, IAlertTypes} from '../interfaces/IBooksState';
import useFindBook from '../hooks/useFindBook';

export const BookContext = React.createContext({} as IContextData);

export const BooksProvider = ({children}: IBooksPropsProvider) => {
    const [books, setBooks] = useState<IBaseData[]>([])
    const [editBookInfoFlag, setEditBookInfoFlag] = useState<number>(0);
    const [redirect, setRedirect] = useState<boolean>(false);
    const [bookMode, setBookMode] = useState<boolean>(false)
    const [notification, setNotification] = useState({} as IAlertTypes)
    const { state } = useFindBook()

    useEffect(() => setBooks([...state]), [state])

    return <BookContext.Provider value={{
        books,
        bookMode,
        setBooks,
        setBookMode,
        editBookInfoFlag,
        setEditBookInfoFlag,
        redirect,
        setRedirect,
        notification,
        setNotification
    }}>{children}</BookContext.Provider>
}