import { useState, useEffect } from "react";
import {ICONS} from "../constants/icons";
import {useDispatch} from "react-redux";
import {darkColors, lightColors} from "../store/colorsSlice";

export function NavBar(themeData){

    const [darkModIcon, setDarkModIcon] = useState("LIGHT");
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const dispatch = useDispatch()

    const themeHandler =(e)=>{
        if(darkModIcon === "LIGHT"){
            setDarkModIcon("DARK");
            dispatch(darkColors());
        } else {
            setDarkModIcon("LIGHT");
            dispatch(lightColors());
        }
    }

    return <> <nav className="w-full py-5 px-10 sm:px-96 bg-[#F7F9FE] flex justify-between items-center ">
        <div className={`flex items-center`}>
            <img className="h-10 w-10 object-contain "src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png" alt="" />
            <h1 className={`pl-2 text-xl font-bold text-slate-600`}>REACT</h1>
        </div>
        <div className={`hidden lg:block`}>
            <ul className="font-semibold lg:flex items-center" >
                <li className="mx-[10px] cursor-pointer">Home</li>
                <li className="mx-[10px] cursor-pointer">About Us</li>
                <li className="mx-[10px] cursor-pointer">Contact Us</li>
                <li className="mx-[20px] cursor-pointer" onClick={themeHandler}>{darkModIcon === "LIGHT" ? ICONS.dark: ICONS.light}</li>
            </ul>
        </div>
        <div className={`lg:hidden block`}>
            <div className={`cursor-pointer`}  onClick={(event)=>{
                setIsMenuOpen(!isMenuOpen);
            }}>{ICONS.menu}</div>
        </div>

    </nav>
        {isMenuOpen ? <div className={`lg:hidden block bg-[#F7F9FE]`}>
            <ul className="font-semibold lg:flex text-center" >
                <li className="py-[10px] cursor-pointer">Home</li>
                <li className="py-[10px] cursor-pointer">About Us</li>
                <li className="py-[10px] cursor-pointer">Contact Us</li>
                <li className="py-[20px] cursor-pointer " onClick={themeHandler}>{darkModIcon === "LIGHT" ? ICONS.dark: ICONS.light}</li>
            </ul>
        </div> : <></>}
    </>
}