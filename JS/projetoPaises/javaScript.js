let searchButton = document.getElementById("searchButton");
let countryInput = document.getElementById("countryInput");

searchButton.addEventListener("click", () => {
    let countryName = countryInput.value;
    let finalUrl = `https://restcountries.com/v3.1/name/${countryName}?fullText=true`;
    console.log(finalUrl);
    fetch(finalUrl)
        .then((response) => response.json())
        .then((data) => {
            console.log(data[0].capital[0]);
            console.log(data[0].flags.svg);
            console.log(data[0].name.common);
            console.log(data[0].continents[0]);
            console.log(Object.keys(data[0].currencies)[0]);


            console.log(data[0].currencies[Object.keys(data[0].currencies)].name);
            console.log(
                Object.values(data[0].languages).toString().split(",").join(", ")
            );
            result.innerHTML = `
            <img src="${data[0].flags.svg}">

            <h2>${data[0].name.common}</h2>
            <section class="wrapper">
            
                <section class="dataWrapper">
                    <h4>Capital: </h4>
                    <span>${data[0].capital[0]}</span>
                </section>
            </section>
            
            <section class="wrapper">
                <section class="dataWrapper">
                    <h4>Continent: </capital>
                        <span>${data[0].continents[0]}</span>
                </section>
            </section>
            
            <section class="wrapper">
                <section class="dataWrapper">
                    <h4>Population: </capital>
                        <span>${data[0].population}</span>
                </section>
            </section>
            
            <section class="wrapper">
                <section class="dataWrapper">
                    <h4>Currency: </capital>
                        <span>${data[0].currencies[Object.keys(data[0].currencies)].name} - ${Object.keys(data[0].currencies)[0]}
                        </span>
                </section>
            </section>
            
            <section class="wrapper">
                <section class="dataWrapper">
                    <h4>Common language(s): </capital>
                        <span>${Object.values(data[0].languages).toString().split(",").join(", ")}</span>
                </section>
            </section>
        `;
        })
        .catch(() => {
            if (countryName.length == 0){
                result.innerHTML = `<h3>The input field can not be empty</h3>`;
            }else{
                result.innerHTML = `<h3>Please, enter a valid country name.</h3>`
            }
        })
});