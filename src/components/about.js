import {useSelector} from "react-redux";
import {ICONS} from "../constants/icons";

export function AboutUs (){

    const colors = useSelector((state) => state.appColors.value);

    return <>
        <div className={`w-full h-auto px-10 md:px-80 bg-[${colors.lightBackgroundColor}] py-20`}>
            <div className={`w-full text-center mx-auto `}>
                <h1 className={`font-normal text-3xl`}>About <span className={`text-[${colors.mainOrange}]`}>Us</span></h1>
                <p className={`text-slate-500 mt-2`}>Maecenas tempus tellus eget condimentum rhoncus sem quam semper <br/> libero pulvinar hendrerit id lorem.</p>
            </div>
            <div className={`md:flex my-14`}>
                <div className={`w-auto md:flex-2 `}>
                    <h1 className={`font-light text-4xl mt-4  leading-[1.2] hidden md:block`}>Passionate About <br/> Creating Templates For <br/> Setup</h1>
                    <h1 className={`font-light text-4xl mt-4 leading-[1.2] md:hidden text-center`}>Passionate About Creating Templates For Setup</h1>
                </div>
                <div className={`w-auto flex-1 mt-10 lg:mt-0 lg:px-10`}>
                    <h2 className={`font-normal text-xl mt-4`}>Our Mission</h2>
                    <p className={`text-slate-500 mt-6 ${colors.lightBlack}`}>At vero eos accusamus iusto odio dignissim ducimus a blandi praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sit occaecati cupiditate provident similique sunt.</p>
                </div>
                <div className={`w-auto flex-1 mt-10 lg:mt-0 `}>
                    <h2 className={`font-normal text-xl mt-4 `}>Our Vision</h2>
                    <p className={`text-slate-500 mt-6 ${colors.lightBlack}`}>Temporibus autem quibusdam et aut officiis debitis that aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae at Itaque earum rerum hic tenetur sapiente.</p>
                </div>
            </div>

        </div>
    </>
}