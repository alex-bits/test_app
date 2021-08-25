import {useEffect, useState} from 'react';
import {IBaseData} from '../interfaces/IBooksState';
import axios from 'axios';
import {constants} from '../constants/constants';

type TFindBook = {
    [value: string]: any
}

const useFindBook = (): TFindBook => {
    const [state, setState] = useState<IBaseData[]>([])

    const getData = async() =>{
        try {
            const response = await axios.get(`${constants.path.url}`)
            const data = await response.data;
            setState([...data])
        } catch (error){
            console.log(error)
        }
    }

    const getBook = async (id: number) => {
        try {
            const response = await axios.get(`${constants.path.url}/${id}`)
            return response.data
        }
        catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {getData()}, [])

    return {getBook, state}
}

export default useFindBook;