import { FaRegStar } from "react-icons/fa6";

const Book = ({ book }) => {
    const { image, bookName, author, category, tags, rating } = book
    return (
        <div className="cursor-pointer">
            <div className="card bg-base-100 w-96 shadow-sm p-6">
                <figure className="bg-[#F3F3F3] p-8">
                    <img className="w-32"
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