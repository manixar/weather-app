import React from "react";
/*import { useState,useEffect } from "react";*/
import './style.css';

function Home() {
    /*const [data,setData]=useState({
        celcius:10,
        name:'London',
        humidity:10,
        speed:2,
    })
    useEffect(() => {
       

    },[])*/
    return(
        <div className="container">
            <div className="weather">
                <div className="search">
                    <input type="text" placeholder="Enter City" />
                    <button>
                        <img src="./img/search.png" alt=""/>
                    </button>
                </div>
                <div className="winfo">
                    <img src="./img/sun.png" alt="" className="icon"/>
                    <h1>22°c</h1>
                    <h2>London</h2>
                    <div className="details">
                        <div className="col">
                            <img src="./img/humidity.png" alt="" />
                            <div className="humidity">
                                <p>20%</p>
                                <p>Humididty</p>
                            </div>
                        </div>
                        <div className="col">
                            <img src="./img/wind.png" alt="" />
                            <div className="wind">
                                <p>2 km/h</p>
                                <p>Wind</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Home;