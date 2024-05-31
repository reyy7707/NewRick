import React from "react";
import Header from './components/header.jsx'
import Search from './components/search.jsx'
import { Routes, Route } from "react-router-dom";
import MainPage from './pages/MainPage'
import DefinePerson from './pages/DefinePerson.jsx'
import Location from "./pages/Location.jsx";
import Episode from "./pages/Episode.jsx";

import "./App.css"
import NotAWork from "./pages/found.jsx"

    const App = () => {

        // useEffect(() => {
        //     const getData = async() => {
        //         const data = await locationApi.getAlllocation({ gender: 'Female' })
        //         console.log(data);
        //     }
        //     getData()
        // },[])

        return(
            <>
            <Header/>
                    <Routes> 
                        <Route path="/" element={<><Search/> <MainPage/></>}></Route>
                        <Route path="/character/:id" element={<DefinePerson/>}></Route>
                        <Route path="/character" element={<> <NotAWork/></>}></Route>
                        <Route path="/location" element={<Location/>}></Route>
                        <Route path="/episode" element={<Episode/>}></Route>
                        <Route path="*" element={<Error/>}>Error</Route>
                    </Routes>
            </>
        )
    }
export default App