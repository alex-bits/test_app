export interface IBaseData {
    [value: string]: string | number
}
export interface IAlertTypes{
    message: string;
    show: boolean
    type: string
    timeout?: number
}
export interface IContextData {
    books?: IBaseData[];
    setBooks: React.Dispatch<React.SetStateAction<IBaseData[]>>
    bookMode?: boolean;
    setBookMode?: React.Dispatch<React.SetStateAction<boolean>>;
    editBookInfoFlag?: number;
    setEditBookInfoFlag?: React.Dispatch<React.SetStateAction<number | 0>>;
    redirect: boolean;
    setRedirect: React.Dispatch<React.SetStateAction<boolean>>;
    notification: IAlertTypes;
    setNotification: React.Dispatch<React.SetStateAction<IAlertTypes>>
}

export interface IBooksPropsProvider {
    children: object;
}



