import { NavLink } from "react-router-dom";


const Banner = () => {
    return (
        <div className="py-[130px] bg-[#1313130D]  shadow-lg rounded-lg md:px-[120px] flex flex-col-reverse md:flex-row gap-5  justify-baseline items-center md:max-h-[550px]">
            <div className="md:w-1/2">
                <h1 className="heading text-2xl md:text-5xl font-bold">Books to freshen up <br /> your bookshelf</h1>
                <NavLink to={'/listed'}>
                    <button className="btn my-8 bg-[#23BE0A] text-white border-0">View The lists</button>
                </NavLink>
            </div>
            <div className="md:w-1/2 md:flex justify-end">
                <img className="w-96" src="https://i.pinimg.com/736x/32/4d/f3/324df3d74916177835279c6e642967c8.jpg" alt="book-banner" />
            </div>
            
        </div>
    );
};

export default Banner;