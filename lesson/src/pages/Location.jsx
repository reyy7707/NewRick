import React, { useEffect, useState } from "react";
import './Location.css'

    const Location = () => {

        const [data, setData] = useState();
        const [loading, setLoading] = useState();

        useEffect(() => {
            const getData = async() => {
                setLoading(true)
                const data = await fetch(`https://rickandmortyapi.com/api/character?location${location}`)
                const dataJson = await data.json()
                setData(dataJson)
                setLoading(false)
            }
            getData()
        },[location])



    if(loading) {
        <div> <h1> Loading... </h1> </div>
    }
        return(
            <>
                <div className="logo_div1">
                    <img src="../public/rick-and-morty 1.png" />
                </div>

                <div className="div_100_search1">
                    <div className="div_60_search1">
                        <input className="search_input1" type="search" placeholder="Filter by name..." />
                        <select className="search_option1"> <option> Type </option>  </select>
                        <select className="search_option1"> <option> Dimension </option>  </select>
                    </div>
                </div>


                <div className="box_div_100">
                    <div className="box_div_center">
                        {data?.results.map((item,index) => {
                            <div key={index}>
                                <div className="box_div_column"> <div className="box"> {item.location.name} </div> <div className="box"></div> <div className="box"></div> <div className="box"></div> </div>
                                <div className="box_div_column"> <div className="box"></div> <div className="box"></div> <div className="box"></div> <div className="box"></div> </div>
                                <div className="box_div_column"> <div className="box"></div> <div className="box"></div> <div className="box"></div> <div className="box"></div> </div>
                            </div>
                        })}
                    
                    </div>
                </div>
            </>
        )
    }
export default Location