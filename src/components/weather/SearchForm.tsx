const formData={
    search:""
}
function SearchForm() {
    const searchHandler =(e)=>{
     formData.search =  e.target.value;
    }
    const callAPI = async () => {
        try {
            const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=tehran&appid=3dce9b1c66837262a25b3f448d354a76&units=metric`);
            const data = await res.json();
            console.log(data);
        } catch (err) {
            console.log(err);
        }
    };


    return (
        <form className={"flex flex-row justify-center items-center  border-b-2 w-11/12  h-1/4 "} onSubmit={callAPI}>
            <input className={"border p-2 mr-5 "} type={"text"} name={"searchBox"} placeholder={"Tehran"} onChange={searchHandler}/>
            <input className={"bg-orange-400 py-2 px-8 rounded text-white "} type={"submit"} value={"Search"}/>
        </form>
    );
}

export default SearchForm;