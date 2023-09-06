import React, {createContext, useState} from "react";


const CustomContext = createContext();

const Context = (props) => {

    const [books, setBooks] = useState([
        {id: 1, title: "Name1"},
        {id: 2, title: "Name2"},
        {id: 3, title: "Name3"},
    ]);

    const addBook = (book) => {
        setBooks([book, ...books])
    }

    const removeBook = (id) => {
        setBooks(id.filter(book => book.id !== id))
    }
    const value = {
        books,
        addBook,
        removeBook
    }

    return(
        <CustomContext.Provider value={{value}}>
            {props.children}
        </CustomContext.Provider>
    )
}

export default Context;