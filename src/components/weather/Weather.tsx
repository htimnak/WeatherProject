import SearchForm from "@/components/weather/SearchForm";
import WeatherInfo from "@/components/weather/WeatherInfo";
import ForecastList from "@/components/weather/ForecastList";
import {useState} from "react";
interface Props {
    city:string;
}

function Weather({city}:Props) {
   const [weatherState,setWeatherState]  =  useState<Weather>(
       {
           city:city,
           wind:'',
           humidity:'',
           description:'',
           icon:'',
           daily:[]
       });
    return (
       <div className={"flex flex-col items-center  bg-white w-3/5 h-96 rounded-lg"}>
           <SearchForm/>
           <WeatherInfo/>
           <ForecastList/>
       </div>
    );
}

export default Weather;