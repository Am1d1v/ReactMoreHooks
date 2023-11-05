import { createContext, useState } from "react";

export const CustomContext = createContext();

function Context(props){


    const [books, setBooks] = useState([
      {id: 1, title: 'BookTitle1'}, 
      {id: 2, title: 'BookTitle2'},  
      {id: 3, title: 'BookTitle3'}  
    ])
    
    const addBook = (book) => {
        setBooks([book, ...books])
    }

    const removeBook = (id) => {
        setBooks(books.filter(book => {
            return book.id !== id;
        }))
    }

    const value = {
        books,
        addBook,
        removeBook
    }
    
    
    return(
        <CustomContext.Provider value={value}>
            {props.children}
        </CustomContext.Provider>
    )

}
export default Context;