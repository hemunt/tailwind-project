import {useSelector} from "react-redux";
import {ICONS} from "../constants/icons";
import features from "../assets/features.png";
import featuresSecond from "../assets/feature1.png";
import featuresThird from "../assets/feature2.png";

export function OurFeatures (){
    const colors = useSelector((state) => state.appColors.value);
    return <>
        <div className="w-full h-auto px-10 lg:px-80 bg-white py-20" >
            <div className={`w-full  text-center mx-auto`}>
                <h1 className={`font-normal text-3xl`}>Our <span className={`text-[${colors.mainOrange}]`}>Features</span></h1>
                <p className={`text-slate-500 mt-2`}>Maecenas tempus tellus eget condimentum rhoncus sem quam semper <br/> libero pulvinar hendrerit id lorem.</p>
            </div>

            <div className={`lg:flex my-14 justify-between items-center`}>
                <div className={`w-auto flex-2`}>
                    <img className={`w-[420px] h-[420px] object-contain`} src={features} alt=""/>
                </div>
                <span className={`mx-16`}></span>
                <div className={`w-auto flex-1`}>
                    <div className="flex ">
                    <div className="relative">
                        <div className={`w-12 h-12 absolute bottom-0 left-0 bg-[${colors.mainOrange}] rounded-md  flex justify-center items-center`}>
                            <div className={``}>{ICONS.layout}</div>
                        </div>
                        <div className={`w-16 h-20 bg-[${colors.mainOrange}] bg-opacity-5 rotate-12 rounded-md`}>
                        </div>
                    </div>
                    </div>
                    <h2 className={`font-normal text-xl mt-4`}>Activity Reporting</h2>
                    <p className={`text-slate-500 mt-6 pr-6`}>Et harum quidem rerum facilise expedita distinctio nam libero tempore cum soluta nobis as eligendi optio cumque nihil quis nostrum exercitationem impedit minus omnis repellendus.</p>
                    <div className={`mt-6 flex`}><p className={`text-[${colors.mainOrange}] font-medium pr-2`}>Read More</p>{ICONS.rightArrow}</div>
                </div>
            </div>

            <div className={`lg:flex my-14 justify-between items-center`}>
                <div className={`w-auto flex-1`}>
                    <div className="flex ">
                        <div className="relative">
                            <div className={`w-12 h-12 absolute bottom-0 left-0 bg-[${colors.mainOrange}] rounded-md  flex justify-center items-center`}>
                                <div className={``}>{ICONS.team}</div>
                            </div>
                            <div className={`w-16 h-20 bg-[${colors.mainOrange}] bg-opacity-5 rotate-12 rounded-md`}>
                            </div>
                        </div>
                    </div>
                    <h2 className={`font-normal text-xl mt-4`}>Team Management</h2>
                    <p className={`text-slate-500 mt-6 pr-6`}>Et harum quidem rerum facilise expedita distinctio nam libero tempore cum soluta nobis as eligendi optio cumque nihil quis nostrum exercitationem impedit minus omnis repellendus.</p>
                    <div className={`mt-6 flex`}><p className={`text-[${colors.mainOrange}] font-medium pr-2`}>Read More</p>{ICONS.rightArrow}</div>
                </div>
                <span className={`lg:mx-16`}></span>
                <div className={`w-auto flex-2`}>
                    <img className={`w-[420px] h-[420px] object-contain`} src={featuresSecond} alt=""/>
                </div>

            </div>

            <div className={`lg:flex lg:my-14 my-4 justify-between items-center`}>
                <div className={`w-auto flex-2`}>
                    <img className={`w-[420px] h-[420px] object-contain`} src={featuresThird} alt=""/>
                </div>
                <span className={`lg:mx-16`}></span>
                <div className={`w-auto flex-1`}>
                    <div className="flex">
                        <div className="relative">
                            <div className={`w-12 h-12 absolute bottom-0 left-0 bg-[${colors.mainOrange}] rounded-md  flex justify-center items-center`}>
                                <div className={``}>{ICONS.layout}</div>
                            </div>
                            <div className={`w-16 h-20 bg-[${colors.mainOrange}] bg-opacity-5 rotate-12 rounded-md`}>
                            </div>
                        </div>
                    </div>
                    <h2 className={`font-normal text-xl mt-4`}>Marketing Analysis</h2>
                    <p className={`text-slate-500 mt-6 pr-6`}>Et harum quidem rerum facilise expedita distinctio nam libero tempore cum soluta nobis as eligendi optio cumque nihil quis nostrum exercitationem impedit minus omnis repellendus.</p>
                    <div className={`mt-6 flex`}><p className={`text-[${colors.mainOrange}] font-medium pr-2`}>Read More</p>{ICONS.rightArrow}</div>
                </div>
            </div>

        </div>
    </>
}