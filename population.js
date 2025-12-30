function gotoCountry(){
    const country = document.getElementById("countryInput").value;
    if(country === ""){
        alert("please enter a country name");
        return;
    }
    window.location.href = "country.html?country=" + country;
}