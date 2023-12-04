import ForecastItem from "@/components/weather/ForecastItem";

function ForecastList(props) {
    return (
        <div className={"bg-lime-400 border-b-2 w-11/12  h-1/2"}>
            <ForecastItem/>
        </div>
    );
}

export default ForecastList;