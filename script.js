function getCountry() {
    const country = document.getElementById("countryInput").value;
    const resultDiv = document.getElementById("result");

    fetch(`http://127.0.0.1:5000/api/country/${country}`)
        .then(response => response.json())
        .then(data => {
            if (data.error) {
                resultDiv.innerHTML = `<p style="color:red;">${data.error}</p>`;
            } else {
                resultDiv.innerHTML = `
                    <h2>${country.toUpperCase()}</h2>
                    <p><b>Population:</b> ${data.population}</p>
                    <p><b>Birth Rate:</b> ${data.birth_rate}</p>
                    <p><b>Death Rate:</b> ${data.death_rate}</p>
                    <p><b>Life Expectancy:</b> ${data.life_expectancy}</p>
                    <p>${data.info}</p>
                `;
            }
        })
        .catch(error => {
            resultDiv.innerHTML = "Server error";
        });
}
