import {useSelector} from "react-redux";
import {ICONS} from "../constants/icons";

export function Footer(){
    const colors = useSelector((state) => state.appColors.value);

    return <>
        <div className={`w-full h-auto md:px-64 px-20 py-20 bg-[${colors.lightBackgroundColor}] dark:bg-[#1C1C28]`}>
            <div className={`md:flex my-14`}>
                <div className={`w-auto flex-1 pt-6`}>
                    <div className={`flex items-center`}>
                        <img className="h-10 w-10 object-contain "src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png" alt="" />
                        <h1 className={`pl-2 text-xl font-bold text-slate-600 dark:text-white`}>REACT</h1>
                    </div>
                    <h2 className={` text-m mt-2 ${colors.lightBlack} dark:text-slate-400`}>Hemunt Sharma</h2>
                    <h2 className={` text-m mt-2 ${colors.lightBlack} dark:text-slate-400`}>9781873783</h2>
                </div>

                <div className={`w-auto flex-1`}>
                    <h2 className={`text-xl pt-6 dark:text-white`}>Services</h2>
                    <h2 className={` text-m mt-2 dark:text-slate-400 ${colors.lightBlack}`}>Digital Marketing</h2>
                    <h2 className={` text-m mt-2 ${colors.lightBlack} dark:text-slate-400`}>Business Analysis</h2>
                    <h2 className={` text-m mt-2 ${colors.lightBlack} dark:text-slate-400`}>Social Activation</h2>
                    <h2 className={` text-m mt-2 ${colors.lightBlack} dark:text-slate-400`}>How It Work</h2>
                </div>

                <div className={`w-auto flex-1`}>
                    <h2 className={`text-xl pt-6 dark:text-white`}>Services</h2>
                    <h2 className={` text-m mt-2 ${colors.lightBlack} dark:text-slate-400`}>Digital Marketing</h2>
                    <h2 className={` text-m mt-2 ${colors.lightBlack} dark:text-slate-400`}>Business Analysis</h2>
                    <h2 className={` text-m mt-2 ${colors.lightBlack} dark:text-slate-400`}>Social Activation</h2>
                    <h2 className={` text-m mt-2 ${colors.lightBlack} dark:text-slate-400`}>How It Work</h2>
                </div>

                <div className={`w-auto flex-1 dark:text-white`}>
                    <h2 className={`text-xl pt-6`}>Our Address</h2>
                    <h2 className={` text-m mt-2 ${colors.lightBlack} dark:text-slate-400`}>Sector 80, Mohali, Punjab 144601</h2>
                    <h2 className={` text-m mt-2 ${colors.lightBlack} font-bold dark:text-slate-400`}>Email: Support@gamil.com</h2>


                </div>

            </div>

        </div>
    </>
}