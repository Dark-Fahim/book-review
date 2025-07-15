import React, { useEffect, useState } from 'react';
import { NavLink, useLoaderData } from 'react-router-dom';
import { getReadBooksFromLS, getWishlistBooksFromLS } from '../../utils/localStorage';
import ListedBook from '../ListedBook/ListedBook';

import WishlistBook from '../WishlistBook/WishlistBook';



const ListedBooks = () => {
    const books = useLoaderData()
    const [booksRead, setBooksRead] = useState([])
    const [displayReadBooks, setDisplayReadBooks] = useState([])
    const [wishlist, setWishlist] = useState([])
    const [displayWishlist, setDisplayWishlist] = useState([])



    useEffect(() => {
        const wishlistBookIds = getWishlistBooksFromLS()
        const wishlistBooks = books.filter(book => wishlistBookIds.includes(book.bookId))
        const readBookIds = getReadBooksFromLS()
        const readBooks = books.filter(book => readBookIds.includes(book.bookId))
        setBooksRead(readBooks)
        setDisplayReadBooks(readBooks)
        setWishlist(wishlistBooks)
        setDisplayWishlist(wishlistBooks)

    }, [books])

    const handleBooksFilter = (filter) => {
        // setDisplayReadBooks(booksRead)
        if (filter === 'rating') {
            const rating = [...booksRead].sort((a, b) => b.rating - a.rating)
            setDisplayReadBooks(rating)
            const rating2 = [...wishlist].sort((a, b) => b.rating - a.rating)
            setDisplayWishlist(rating2)
        }
        else if (filter === 'pages') {
            const pages = [...booksRead].sort((a, b) => a.totalPages - b.totalPages)
            setDisplayReadBooks(pages)
            const pages2 = [...wishlist].sort((a, b) => a.totalPages - b.totalPages)
            setDisplayWishlist(pages2)
        }
        else if (filter === 'year') {
            const year = [...booksRead].sort((a, b) => b.yearOfPublishing - a.yearOfPublishing)
            setDisplayReadBooks(year)
            const year2 = [...wishlist].sort((a, b) => b.yearOfPublishing - a.yearOfPublishing)
            setDisplayWishlist(year2)
        }


    }




    // console.log(readBooks);
    return (
        <div className='container mx-auto'>
            <h3 className='my-7 py-9 bg-[#1313130D] text-center text-3xl font-bold'> Books</h3>
            <details className="dropdown text-white flex flex-col items-center justify-center">
                <summary className="btn text-white font-bold bg-[#23BE0A] m-1">Sort by</summary>
                <ul className="menu dropdown-content bg-[#23BE0A] rounded-box z-1 w-52 p-2 shadow-sm">

                    <li onClick={() => handleBooksFilter('rating')}><a>Rating</a></li>
                    <li onClick={() => handleBooksFilter('year')}><a>Publishing Year</a></li>
                    <li onClick={() => handleBooksFilter('pages')}><a>Number Of Pages</a></li>
                </ul>
            </details>
            {/* name of each tab group should be unique */}
            <div className="tabs tabs-lift">
                <input type="radio" name="my_tabs_3" className="tab" aria-label="Read Books" defaultChecked />
                <div className="tab-content bg-base-100 border-base-300 p-6">
                    <div className='my-6'>
                        {
                            displayReadBooks.map(book => <ListedBook book={book} key={book.bookId}></ListedBook>)
                        }
                    </div>
                </div>

                <input type="radio" name="my_tabs_3" className="tab" aria-label="Wishlist" />
                <div className="tab-content bg-base-100 border-base-300 p-6">
                    {
                        displayWishlist.map(book => <WishlistBook book={book} key={book.bookId}></WishlistBook>)
                    }
                </div>


            </div>


        </div>
    );
};

export default ListedBooks;