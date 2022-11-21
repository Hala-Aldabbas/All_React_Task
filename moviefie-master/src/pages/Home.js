import React from 'react';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import noImage from '../images/noImage.png';



function Home() {

    const [fetchedData, setfetchedData] = useState(null);
    const [input, setinput] = useState("");
    const [search, setsearch] = useState("men")

    const fetchData = async ()=>{
        try {
            const { data } = await axios.get(`https://www.omdbapi.com/?apikey=dd6c9e75&s=${search}`);
            setfetchedData(data.Search);
            
        } catch (error) {
            console.log(error)
        }
  }

  

  useEffect(() => {
    fetchData();
  }, [search])


  const inputHander = (e)=>{
      setinput(e.target.value);
  }

  const submitHandler = (e)=>{
      e.preventDefault();
      setsearch(input);
  }


    return (
        <div className="main-container">
            <div className="header">
                <h4>
                    Movies Api
                </h4>
            </div>
            <div className="search">
                <form onSubmit={submitHandler}>
                    <input   placeholder="Search here" value={input} onChange={inputHander} type="text"/>
                    <button> <i class="fas fa-search"></i></button>
                   
                </form>
            </div>
            <div className='movie-poster' style={{width:"100%"}} justify="center" >
                { fetchedData && 
                    fetchedData.map((item)=>{
                        return(
                                <div >
                                     <div className="poster">
                                        <Link to={`/details/${item.imdbID}`} >
                                            <img src={ item.Poster==="N/A" ? noImage : item.Poster} alt=""/>
                                        </Link>
                                    </div>
                                    <div className="title">
                                        <Link key={item.imdbID} to ={`/details/${item.imdbID}`}>
                                            <a href=" ">{item.Title}</a>
                                        </Link>
                                    </div>
                                </div>    
                          
                        )  
                    })
                }
            </div>
            <div className="footer">
           
            </div>
        </div>
    )
}



export default Home
