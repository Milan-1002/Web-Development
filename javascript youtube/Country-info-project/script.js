const searchButton =  document.getElementById("search-btn");
const resultDiv = document.getElementById("result");

searchButton.addEventListener('click', function(){
    searchButton.innerHTML = "Searching..."
    getCountryData();
});

async function getCountryData(){
    resultDiv.innerHTML = '';
    const country = document.getElementById("countryInput").value;


    try{
        const response = await fetch(`https://restcountries.com/v3.1/name/${country}`);
       if(!response.ok && country != "" ){
        resultDiv.innerHTML = "Country not found";
       } 
       
        if (!response.ok){
            throw new Error("Country not found");
            
        }
       
        const data = await response.json();
        const countryData = data[0];
        
        resultDiv.innerHTML = `
        <h2>${countryData.name.common}</h2>
        <img src = "${countryData.flags.png}" width = "150">
        <p><strong>Capital:</strong> ${countryData.capital[0]}</p>
        <p><strong>Population:</strong> ${countryData.population.toLocaleString()}</p>
        <p><strong>Region:</strong> ${countryData.region}</p>

        
        `
    }
    catch(error){
        console.log("Error occured");
    }
    finally{
        searchButton.innerHTML= "Search";
    }

}

getCountryData();
