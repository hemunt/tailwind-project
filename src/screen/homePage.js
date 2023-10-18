import { Header } from "../components/header";
import { NavBar } from "../components/navBar";
import { useState, useEffect } from "react";
import { OutService } from "../components/searvice";
import {useDispatch} from "react-redux";
import {lightColors} from "../store/colorsSlice";
import {AboutUs} from "../components/about";
import {OurFeatures} from "../components/features";
import {Footer} from "../components/footer";
export function HomeScreen(){

    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(lightColors());
    },[]);


    return <div>
        <NavBar/>
        <Header/>
        <OutService/>
        <AboutUs/>
        <OurFeatures/>
        <Footer/>
    </div>
}