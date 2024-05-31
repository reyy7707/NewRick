import React from "react";
import './Location.css'

    const Episode = () => {

        return(
            <>
            <div className="logo_div1">
                    <img src="../public/rick-and-morty2 1.png" />
                </div>

                <div className="div_100_search1">
                    <div className="div_60_search1">
                        <input className="search_input12" type="search" placeholder="Filter by name or episode (ex. S01 or S01E02)" />
                    </div>
                </div>


                <div className="box_div_100">
                    <div className="box_div_center">
                        <div className="box_div_column"> <div className="box"></div> <div className="box"></div> <div className="box"></div> <div className="box"></div> </div>
                        <div className="box_div_column"> <div className="box"></div> <div className="box"></div> <div className="box"></div> <div className="box"></div> </div>
                        <div className="box_div_column"> <div className="box"></div> <div className="box"></div> <div className="box"></div> <div className="box"></div> </div>
                    </div>
                </div>
            </>
        )
    }
export default Episode