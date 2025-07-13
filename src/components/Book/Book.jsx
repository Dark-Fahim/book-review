import { FaRegStar } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const Book = ({ book }) => {
    const { image, bookName, author, category, tags, rating, bookId } = book
    const navigate = useNavigate()
    return (
        <div className="cursor-pointer" onClick={() => navigate(`/book/${bookId}`)}>
            <div className="card bg-base-100  shadow-sm p-6">
                <figure className="bg-[#F3F3F3] p-8">
                    <img className="w-28"
                        src={image}
                        alt="Shoes" />
                </figure>
                <div className="card-body">
                    <ul className="flex text-[#23BE0A] font-semibold gap-4">
                        {
                            tags.map((tag, idx) => <li className="p-1 bg-[#23BE0A0D]" key={idx}>{tag}</li>)
                        }
                    </ul>
                    <div className="border-b border-dashed border-[#13131326]">
                        <h2 className="card-title heading font-bold text-2xl">{bookName}</h2>
                        <p className="my-3 text-[#424242] text-xl">By : {author}</p>
                    </div>
                    <div className="card-actions justify-between mt-5 text-[#424242]">
                        <p>{category}</p>
                        <p className="flex justify-center items-center gap-3">{rating} <span><FaRegStar /></span></p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Book;