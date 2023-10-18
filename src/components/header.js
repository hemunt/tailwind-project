import { useSelector, useDispatch } from 'react-redux'
import {useEffect} from "react";
import headerImage from "../assets/headerImage.png"

export function Header(){

    const colors = useSelector((state) => state.appColors.value);

    useEffect(()=>{
        console.log(`Hello ${colors.lightBackgroundColor}`);

    },[]);

    return <header className={`w-full h-auto bg-[${colors.lightBackgroundColor}] px-10 lg:px-80`}>
            <div className="lg:flex justify-between items-center">
                <div className="py-8 md:my-52">
                    <h2 className={`text-[#2558AB] font-medium`}>CREATIVE MARKETING</h2>
                    <h1 className={`font-medium text-4xl mt-6 line-clamp-2 text-slate-800`}>Get Your Professional<br/> Website Done With <span className={`font-bold text-[#FF7549]`}>Deoxa</span></h1>
                    <p className={`mt-4 text-slate-500`}>At vero eos et accusamus iusto odio dignissimos ducimus qui <br/>  blanditiis praesentium voluptatum deleniti atque corrupti quos at <br/> dolores molestias excepturi sint occaecati cupiditate.</p>
                    <div className="mt-8">
                    <a href="#" className={`bg-[#FF7549] px-11 py-[10px] mt-[16px] rounded shadow-lg font-normal  text-white`}>Find Out How</a>
                    </div>
                </div>
                <div className="">
                    <img className="w-[420px] h-[420px] object-contain" src={headerImage} alt="" />
                </div>
            </div>
    </header>
}