import { Outlet } from "react-router-dom";
import Header from "../Header/Header";


const Root = () => {
    return (
        <div>
            <Header></Header>
            <h2>this is root</h2>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;