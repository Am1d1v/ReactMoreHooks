import { useContext } from "react"
import {CustomContext} from '../Context'
import Book from '../components/Book'

function Books(){
    
 const {books = []} = useContext(CustomContext)
 console.log(books);

    return(
        <div className="books">
            {
                books.map((book) => {
                    return <Book key={book.id} {...book}/>
                })
            }
        </div>
    )
}
export default Books;