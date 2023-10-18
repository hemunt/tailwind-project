import { useState, useEffect } from "react";
import {ICONS} from "../constants/icons";
import {useDispatch} from "react-redux";
import {darkColors, lightColors} from "../store/colorsSlice";

export function NavBar(themeData){

    const [darkModIcon, setDarkModIcon] = useState("LIGHT");
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const dispatch = useDispatch();
    const themeHandler =(e)=>{
        if(darkModIcon === "LIGHT"){
            setDarkModIcon("DARK");
            dispatch(darkColors());
        } else {
            setDarkModIcon("LIGHT");
            dispatch(lightColors());
        }
    }

    return <> <nav className="w-full py-5 px-10 sm:px-64 bg-[#F7F9FE] flex justify-between items-center dark:bg-[#1C1C28]">
        <div className={`flex items-center`}>
            <img className="h-10 w-10 object-contain "src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png" alt="" />
            <h1 className={`pl-2 text-xl font-bold text-slate-600 dark:text-white`}>REACT</h1>
        </div>
        <div className={`hidden md:block`}>
            <ul className="font-semibold md:flex items-center" >
                <li className="mx-[10px] cursor-pointer dark:text-white">Home</li>
                <li className="mx-[10px] cursor-pointer dark:text-white">About Us</li>
                <li className="mx-[10px] cursor-pointer dark:text-white">Contact Us</li>
                <li className="mx-[20px] cursor-pointer dark:text-white" onClick={themeHandler}>{darkModIcon === "LIGHT" ? ICONS.dark: ICONS.light}</li>
            </ul>
        </div>
        <div className={`md:hidden block dark:text-white`}>
            <div className={`cursor-pointer`}  onClick={(event)=>{
                setIsMenuOpen(!isMenuOpen);
            }}>{ICONS.menu}</div>
        </div>

    </nav>
        {isMenuOpen ? <div className={`md:hidden block bg-[#F7F9FE] dark:bg-[#1C1C28]`}>
            <ul className="font-semibold md:flex text-center justify-center" >
                <li className="py-[10px] cursor-pointer dark:text-white">Home</li>
                <li className="py-[10px] cursor-pointer dark:text-white">About Us</li>
                <li className="py-[10px] cursor-pointer dark:text-white">Contact Us</li>
                <li className="py-[20px] cursor-pointer dark:text-white flex justify-center" onClick={themeHandler}>{darkModIcon === "LIGHT" ? ICONS.dark: ICONS.light}</li>
            </ul>
        </div> : <></>}
    </>
}