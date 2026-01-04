const countryData = {
  india: {
    population: "1.4 Billion",
    birth: "17 per 1000",
    death: "7 per 1000",
    life: "69 years",
    desc: "India is the second most populated country in the world."
  },
  usa: {
    population: "331 Million",
    birth: "12 per 1000",
    death: "8 per 1000",
    life: "78 years",
    desc: "The USA has a diverse population and strong economy."
  }
};

function goToCountry() {
  const country = document.getElementById("countryInput").value.toLowerCase();
  localStorage.setItem("country", country);
  window.location.href = "country.html";
}

if (window.location.pathname.includes("country.html")) {
  const country = localStorage.getItem("country");
  const data = countryData[country];

  if (data) {
    document.getElementById("countryName").innerText = country.toUpperCase();
    document.getElementById("population").innerText = data.population;
    document.getElementById("birth").innerText = data.birth;
    document.getElementById("death").innerText = data.death;
    document.getElementById("life").innerText = data.life;
    document.getElementById("description").innerText = data.desc;
  } else {
    document.body.innerHTML = "<h2>Country not found</h2>";
  }
}
