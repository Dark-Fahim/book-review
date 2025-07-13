// import React, { useEffect, useState } from 'react';
import { NavLink, useLoaderData } from 'react-router-dom';
import { getReadBooksFromLS, getWishlistBooksFromLS } from '../../utils/localStorage';
import ListedBook from '../ListedBook/ListedBook';

import WishlistBook from '../WishlistBook/WishlistBook';


const ListedBooks = () => {
    const books = useLoaderData()
    // const [booksRead, setBooksRead]  = useState([])
    const readBookIds = getReadBooksFromLS()
    const readBooks = books.filter(book => readBookIds.includes(book.bookId))
    const wishlistBookIds = getWishlistBooksFromLS()
    const wishlistBooks = books.filter(book => wishlistBookIds.includes(book.bookId))


    console.log(readBooks);
    return (
        <div className='container mx-auto'>
            <h3 className='my-7 py-9 bg-[#1313130D] text-center text-3xl font-bold'> Books</h3>
            <details className="dropdown text-white flex flex-col items-center justify-center">
                <summary className="btn text-white font-bold bg-[#23BE0A] m-1">Sort by</summary>
                <ul className="menu dropdown-content bg-[#23BE0A] rounded-box z-1 w-52 p-2 shadow-sm">
                    <li><a>All</a></li>
                    <li><a>Rating</a></li>
                    <li><a>Publishing Year</a></li>
                    <li><a>Number Of Pages</a></li>
                </ul>
            </details>
            {/* name of each tab group should be unique */}
            <div className="tabs tabs-lift">
                <input type="radio" name="my_tabs_3" className="tab" aria-label="Read Books" />
                <div className="tab-content bg-base-100 border-base-300 p-6">
                    <div className='my-6'>
                        {
                            readBooks.map(book => <ListedBook book={book} key={book.bookId}></ListedBook>)
                        }
                    </div>
                </div>

                <input type="radio" name="my_tabs_3" className="tab" aria-label="Wishlist" defaultChecked />
                <div className="tab-content bg-base-100 border-base-300 p-6">
                    {
                        wishlistBooks.map(book => <WishlistBook book={book} key={book.bookId}></WishlistBook>)
                    }
                </div>


            </div>

            
        </div>
    );
};

export default ListedBooks;