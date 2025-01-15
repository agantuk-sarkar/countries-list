// fetch the all countries data
export const fetchCountries = async ()=>{
    try{
        const response = await fetch("https://restcountries.com/v3.1/all");

        if(response.ok){
            const data = await response.json();
            return data;
            // console.log("data:",data);
        } else {
            throw new Error("Bad Gateway");
        }
    } catch(error){
        console.log("error:",error);
    }
}