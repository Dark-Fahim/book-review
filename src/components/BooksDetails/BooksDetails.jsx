import { useLoaderData, useParams } from "react-router-dom";
import { getReadBooksFromLS, getWishlistBooksFromLS, saveReadBooksToLS, saveWishlistsBooksToLS, updateWishlist } from "../../utils/localStorage";
import { ToastContainer, toast } from 'react-toastify';


const BooksDetails = () => {
    const data = useLoaderData()
    const { bookId } = useParams()
    // console.log(data, id);
    const book = data.find(book => book.bookId === parseInt(bookId))
    // console.log(book);
    const { bookName, author, image, review, totalPages, rating, category, tags, publisher, yearOfPublishing } = book

    const handleReadBooks = () =>{
        const wishlistBooks = getWishlistBooksFromLS()
        const readBooks = getReadBooksFromLS()
        const remaining = wishlistBooks.filter(id => id !== parseInt(bookId))
        updateWishlist(remaining)
        for(const id of readBooks){
            if(id === parseInt(bookId)){
                toast("Already Added To Read");
                return
            }
        }
        console.log(wishlistBooks);
        toast("Added to Read");
        saveReadBooksToLS(parseInt(bookId))
    }

    const handleWishlistBooks = () =>{
        const readBooks = getReadBooksFromLS()
        console.log(readBooks);
        for(const id of readBooks){
            if(id === parseInt(bookId)){
                toast("Already Added To Read");
                return
            }
        }

        const wishlistBooks = getWishlistBooksFromLS()
        for(const id of wishlistBooks){
            if(id === parseInt(bookId)){
                toast("Already Added To wishlist");
                return
            }
        }

        toast("Added to Wishlist");
        saveWishlistsBooksToLS(parseInt(bookId))
    }

    return (
        <div className="flex flex-col md:grid grid-cols-2 gap-6 my-20 container mx-auto">
            <div className="p-20 bg-[#1313130D] rounded-lg">
                <img className="w-fit" src={image} alt="" />
            </div>
            <div className="flex flex-col justify-between">
                <h2 className="text-4xl heading font-bold">{bookName}</h2>
                <p className="text-xl my-5 text-[#131313CC]">By : {author}</p>
                <hr className="border-[#13131326]" />
                <p className="my-5 text-xl text-[#131313CC]">{category}</p>
                <hr className="border-[#13131326]" />
                <p className="text-[#131313CC] my-5"><span className="font-bold text-black">Review: </span>{review}</p>
                <ul className="flex gap-4 my-6">
                    <li className="font-bold text-black">Tags</li>
                    {
                        tags.map((tag, idx) => <li className="text-[#23BE0A] p-1 bg-[#23BE0A0D]" key={idx}>#{tag}</li>)
                    }
                </ul>
                <hr className="border-[#13131326]" />
                <div className="my-6 flex flex-col gap-6">
                    <div className="grid grid-cols-2">
                        <h3 className="text-[#131313CC]">Number Of Pages: </h3>
                        <p className="text-[#131313] font-bold">{totalPages}</p>
                    </div>
                    <div className="grid grid-cols-2">
                        <h3>Publisher: </h3>
                        <p className="text-[#131313] font-bold">{publisher}</p>
                    </div>
                    <div className="grid grid-cols-2">
                        <h3 className="text-[#131313CC]">Year Of Publishing: </h3>
                        <p className="text-[#131313] font-bold">{yearOfPublishing}</p>
                    </div>
                    <div className="grid grid-cols-2">
                        <h3 className="text-[#131313CC]">Rating: </h3>
                        <p className="text-[#131313] font-bold">{rating}</p>
                    </div>
                </div>
                <div>
                    <button onClick={handleReadBooks}  className="btn mr-10 btn-outline btn-primary">Read</button>
                    <button onClick={handleWishlistBooks} className="btn btn-secondary btn-outline">WishLst</button>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default BooksDetails;