import { useEffect, useState } from "react";
import Book from "../Book/Book";


const Books = () => {
    const [books, setBooks] = useState([])
    useEffect( () =>{
        fetch('books.json')
        .then(res => res.json())
        .then(data => setBooks(data))
    },[])
    return (
        <div className="my-20">
            <h2 className="text-5xl heading font-bold text-center">Books {books.length}</h2>
            <div className="md:grid flex flex-col items-center justify-center md:grid-cols-2 lg:grid-cols-3 gap-7 my-10">
                {
                    books.map(book => <Book book={book} key={book.bookId}></Book>)
                }
            </div>
            
        </div>
    );
};

export default Books;