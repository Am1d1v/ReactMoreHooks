import React, {createContext, useState} from "react";


const CustomContext = createContext();

const Conxext = (props) => {

    const [books, setBooks] = useState([
        {id: 1, title: "Name1"},
        {id: 2, title: "Name2"},
        {id: 3, title: "Name3"},
    ]);

    const addBook = (book) => {
        setBooks([book, ...books])
    }

    const removeBook = (id) => {
        setBooks(book.filter(book => book.id !== id))
    }
}

export default Conxext;