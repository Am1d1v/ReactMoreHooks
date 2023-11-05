import { useContext } from "react";
import { CustomContext } from "../Context";





function Book(props){

    const {removeBook} = useContext(CustomContext)
    return <h2 onClick={() => removeBook(props.id)}>{props.title}</h2>
}
export default Book;
