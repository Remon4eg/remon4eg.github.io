
  const countrySelect = document.getElementById("country");
  const citiesSelect = document.getElementById("cities");
  const result = document.getElementById("result");

  const citiesByCountry = {
    Ukraine: ["Kyiv", "Lviv", "Odesa"],
    Poland: ["Warsaw", "Krakow", "Gdansk"],
    USA: ["New York", "Los Angeles", "Chicago"]
  };

  countrySelect.addEventListener("change", function () {
    const country = this.value;

    citiesSelect.innerHTML = '<option value="">-- Оберіть місто --</option>';

    if (country) {
      citiesByCountry[country].forEach(city => {
        const option = document.createElement("option");
        option.value = city;
        option.textContent = city;
        citiesSelect.appendChild(option);
      });
    }

    result.textContent = "";
  });

  citiesSelect.addEventListener("change", function () {
    const country = countrySelect.value;
    const city = this.value;

    if (country && city) {
      result.textContent = country + ", " + city;
    }
  });
