import React, { useEffect, useState } from "react";
import './DefinePerson.css'
import { useParams } from "react-router-dom";

    const DefinePerson = () => {
        const params = useParams();
        const [data, setData] = useState();
        useEffect(() => {
            const getData = async() => {
                const data = await fetch(`https://rickandmortyapi.com/api/character/${params.id}`)
                const dataJson = await data.json()
                setData(dataJson)
 
            }
            getData()
        },[params.id])

        return(
            <>
            <div className="data_div_100">
                <div className="data_div_40">
                    <img className="img" src={data?.image}/>
                    <div className="div_h1">
                        <h1 className="div_h1_h1"> {data?.name} </h1>
                    </div>
                </div>
            </div>

            <div className="info_div_100">
                <div className="info_div_60">
                    <h1 className="info_h1"> Informations </h1>
                </div>
                <div>
                    <h1 className="info_h1"> Episodes </h1>
                </div>
            </div>
            <div className="gender_div_100">
                <div className="gender_div_60">
                    <div className="div_60_column"> <h2>Gender</h2><h3 className="column_h1">{data?.gender}</h3> </div>
                    <div className="div_60_column"> <h2>Status</h2><h3 className="column_h1">{data?.status}</h3> </div>
                    <div className="div_60_column"> <h2>Specie</h2><h3 className="column_h1">{data?.species}</h3> </div>
                    <div className="div_60_column"> <h2>Origin</h2><h3 className="column_h1">{data?.origin.name}</h3> </div>
                    <div className="div_60_column"> <h2>Type</h2><h3 className="column_h1">{data?.type}</h3> </div>
                    <div className="div_60_column"> <h2>Location</h2><h3 className="column_h1">{data?.location.name}</h3> </div>
                </div>

                <div className="gender_div_60">
                    <div className="div_60_column"> <h2>S01E01</h2> <h3></h3> </div>
                    <div className="div_60_column"> <h2>S01E01</h2> <h3></h3> </div>
                    <div className="div_60_column"> <h2>S01E01</h2> <h3></h3> </div>
                    <div className="div_60_column"> <h2>S01E01</h2> <h3></h3> </div>
                </div>
            </div>
            </>
        )
    }
export default DefinePerson