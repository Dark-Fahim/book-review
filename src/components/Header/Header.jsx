import { NavLink } from "react-router-dom";
import './Header.css'


const Header = () => {
    return (
        <div>
            <div className="navbar my-3 px-5 container mx-auto rounded-lg shadow-sm">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            <li>
                                <NavLink to={'/'}>Home</NavLink>
                            </li>
                            <li>
                                <NavLink to={'/listed'}>Listed Books</NavLink>
                            </li>
                            <li>
                                <NavLink to={'/read-pages'}>Pages To Read</NavLink>
                            </li>
                        </ul>
                    </div>
                    <a className="text-2xl font-bold">Book Vibe</a>
                </div>
                <div className="navbar-center hidden lg:flex ">
                    <ul className="menu menu-horizontal px-1 gap-5">
                        <li>
                            <NavLink to={'/'}>Home</NavLink>
                        </li>
                        <li>
                            <NavLink to={'/listed'}>Listed Books</NavLink>
                        </li>
                        <li>
                            <NavLink to={'/read-pages'}>Pages To Read</NavLink>
                        </li>
                    </ul>
                </div>
                <div className="navbar-end gap-3">
                    <a className="btn btn-outline btn-secondary ">Sign In</a>
                    <a className="btn btn-outline btn-primary">Sign Up</a>
                </div>
            </div>

        </div>
    );
};

export default Header;