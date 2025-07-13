import { useEffect, useState } from "react";
import Book from "../Book/Book";


const Books = () => {
    const [books, setBooks] = useState([])
    const [booksLength, setBooksLength] = useState(6)
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
                    books.slice(0, booksLength).map(book => <Book book={book} key={book.bookId}></Book>)
                }
            </div>

            <div className="text-center">
                <button onClick={() =>setBooksLength(books.length)} className={`btn btn-primary ${booksLength>6 && 'hidden'}`}>See All Books</button>
            </div>
            
        </div>
    );
};

export default Books;