import { useState, useEffect } from "react";
import '../pages/MainPage.css'
import { Link } from 'react-router-dom'
import Select from 'react-select'

    const MainPage = () => {
        const options = [
            { value: 'alive', label: 'Alive' },
            { value: 'dead', label: 'Dead' },
            { value: 'unknown', label: 'Unknown' }
        ]
        const optionsG = [
            { value: 'male', label: 'Male' },
            { value: 'female', label: 'Female' },
            { value: 'unknown', label: 'Unknown' }
        ]
        const optionsS = [
            { value: 'human', label: 'Human' },
            { value: 'alien', label: 'Alien' },
            { value: 'unknown', label: 'Unknown' }
        ]

        const [data, setData] = useState()
        const [page, setPage] = useState(1)
        const [status, setStatus] = useState('')
        const [gender, setGender] = useState('')
        const [species, setSpecies] = useState('')
        const [loading, setLoading] = useState(false)

    useEffect(() => {
        const getData = async() => {
            setLoading(true)
            const data = await fetch(`https://rickandmortyapi.com/api/character?page=${page}&status=${status}&gender=${gender}&species=${species}`)
            const dataJson = await data.json()
                setData(dataJson)
                setLoading(false)
            }
            getData()
        },[species, gender, status, page])

        const onHandleNextPage = () => {
            setPage(page+1)
        }
        const onHandlePage = () => {
            setPage(page-1)
        }

        const onHandleChangeSelect = (e) => {
            setStatus(e.value)
        }
        const onHandleChangeSelectG = (e) => {
            setGender(e.value)
        }
        const onHandleChangeSelectS = (e) => {
            setSpecies(e.value)
        }

        if(loading) {
            return <div className="div_loading"> <img className="loading_img" src="../public/Спираль.gif" /> </div>
        }
        return(
            <>

            <div className="select_div">
                <div className="select_div_center">
                    <Select className="select" onChange={onHandleChangeSelectS} placeholder={"Species"} options={optionsS} >  </Select>
                    <Select className="select" onChange={onHandleChangeSelectG} placeholder={"Gender"} options={optionsG} >  </Select>    
                    <Select className="select" onChange={onHandleChangeSelect} placeholder={"Status"} options={options} >  </Select>    
                </div>
            </div>   

            <section>
                <div className="api_100">
                    <div className="api_50">
                        {data?.results.map((item,index) => 
                    <div key={index}>
                        <div className="Link_div"> 
                    <Link to={`character/${item.id}`}>
                    <div className="img_name_div">
                        <img className="img_radius" src={item.image} />
                    
                        <div className="name">
                            <h3 className="name_font"> {item.name} </h3>
                            <h4> {item.gender} - {item.status} </h4>
                        </div>
                    </div> 
                    </Link>
                     </div>
                    </div>
                    )}


                    
                    </div>
                </div>
                 
            </section>
            <div className="pages_div">
                <div className="pages_div_50">
                    <button className="pages_button" onClick={onHandlePage} disabled={!data?.info.prev} > Prev Page </button>
                    <button className="pages_button" onClick={onHandleNextPage} disabled={!data?.info.next} > Next Page </button> 
                </div>
            </div>
                   
            </>
        )
    }
export default MainPage