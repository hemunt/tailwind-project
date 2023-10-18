import {useSelector} from "react-redux";
import {ICONS} from "../constants/icons";
import "../animation/animation.css";

export function OutService(){
    const colors = useSelector((state) => state.appColors.value);
    return <>
        <div className="w-full h-auto px-10 md:px-64 bg-white py-20" >
                <div className={`w-full  text-center mx-auto`}>
                    <h1 className={`font-normal text-3xl`}>Our <span className={`text-[${colors.mainOrange}]`}>Service</span></h1>
                    <p className={`text-slate-500 mt-2`}>Maecenas tempus tellus eget condimentum rhoncus sem quam semper <br/> libero pulvinar hendrerit id lorem.</p>
                </div>
                <div className={`lg:flex my-14`}>
                    <div className={`w-auto py-10`}>
                        <div className={`h-20 w-20 flex justify-center items-center rounded-md bg-opacity-5 bg-[${colors.mainOrange}]`}>{ICONS.support}</div>
                        <h2 className={`font-normal text-xl mt-4`}>Awesome Support</h2>
                        <p className={`text-slate-500 mt-6`}>Et harum quidem rerum facilis expedita distinctio nam libero tempore cum quibusdam nobis.</p>
                        <div className={`mt-6`}>{ICONS.rightArrow}</div>
                    </div>
                    <div className={`w-auto px-0 lg:px-10 lg:py-10`}>
                        <div className={`h-20 w-20 flex justify-center items-center rounded-md bg-opacity-5 bg-[${colors.mainOrange}]`}>{ICONS.solution}</div>
                        <h2 className={`font-normal text-xl mt-4`}>Solutions Business</h2>
                        <p className={`text-slate-500 mt-6`}>Et harum quidem rerum facilis expedita distinctio nam libero tempore cum quibusdam nobis.</p>
                        <div className={`mt-6`}>{ICONS.rightArrow}</div>
                    </div>
                    <div className={`w-auto py-10`}>
                        <div className={`h-20 w-20 flex justify-center items-center rounded-md bg-opacity-5 bg-[${colors.mainOrange}]`}>{ICONS.target}</div>
                        <h2 className={`font-normal text-xl mt-4`}>Awesome Support</h2>
                        <p className={`text-slate-500 mt-6`}>Et harum quidem rerum facilis expedita distinctio nam libero tempore cum quibusdam nobis.</p>
                        <div className={`mt-6`}>{ICONS.rightArrow}</div>
                    </div>
                </div>
        </div>
    
    </>
}