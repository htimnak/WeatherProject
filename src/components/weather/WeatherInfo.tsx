function WeatherInfo() {
    return (
        <div className={"flex flex-row w-11/12  h-1/2"}>
            <div className={"flex flex-row items-center w-1/2 h-full"} >
                <ul>
                    <li><h2>Tehran</h2></li>
                    <li>Scattered clouds</li>
                    <li><span>Humidity :</span><span className={"text-orange-300"}>8</span>,<span>wind:</span><span className={"text-orange-300"}>5.14km/h</span></li>
                </ul>
            </div>
            <div className={" w-1/2 h-full"}>

            </div>
        </div>
    );
}

export default WeatherInfo;