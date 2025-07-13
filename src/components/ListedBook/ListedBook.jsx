// import { useContext } from "react";
// import { ReadContext } from "../ListedBooks/ListedBooks";
import { CgProfile } from "react-icons/cg";
import { TbBook2 } from "react-icons/tb";
import { IoLocationSharp } from "react-icons/io5";


const ListedBook = ({book}) => {
    // const readBooks = useContext(ReadContext)
    const { image, bookName, author, tags, yearOfPublishing, publisher, totalPages, rating, category } = book
    return (
        <div className='p-6 border rounded-lg my-6 border-[#13131326] flex gap-6'>
            <div className='w-[230px] p-10'>
                <img src={image} alt="" />
            </div>
            <div className="flex flex-col justify-between grow">
                <h2 className="heading text-2xl font-bold">{bookName}</h2>
                <p className="text-[#131313CC]">By : {author}</p>
                <div className='flex gap-4'>
                    <h2 className="font-bold">Tag</h2>
                    {
                        tags.map((tag, idx) => <p className="text-[#23BE0A] p-1 bg-[#23BE0A33]" key={idx}>#{tag}</p>)
                    }
                    <p className="text-[#131313CC] flex gap-1 items-center"><IoLocationSharp /> Year Of Publishing: {yearOfPublishing}</p>
                </div>
                <div className="flex text-[#13131399] gap-6">
                    <p className="flex items-center gap-1"><span><CgProfile /></span>Publisher: {publisher}</p>
                    <p className="flex items-center gap-1"><span><TbBook2 /></span>Pages: {totalPages}</p>
                </div>
                <hr  className="border border-[#13131326]"/>
                <div className="flex gap-4">
                    <p className="py-3 px-5 bg-[#328EFF26] rounded-xl text-[#328EFF]">Category: {category}</p>
                    <p className="py-3 px-5 bg-[#FFAC3326] rounded-xl text-[#FFAC33]">Rating: {rating}</p>
                    <button className="btn rounded-2xl bg-[#23BE0A] text-white">View Details</button>
                </div>
            </div>
        </div>
    );
};

export default ListedBook;