const cityName = document.getElementById('cityName');
const submitBtn = document.getElementById('submitBtn');
const city_name = document.getElementById('city_name');
const temp_status = document.getElementById('temp_status');
const temp_real_val = document.getElementById('temp_real_val');
const datahide = document.querySelector('.middle_layer')



submitBtn.addEventListener('click', async function (e) {
    e.preventDefault();
    let val = (cityName.value);
    if (val === "") {
        city_name.innerText = `Plz write city before search`;
        datahide.classList.add('data_hide');
    }
    else {
        try {

            let url = `https://api.openweathermap.org/data/2.5/weather?q=${val}&units=metric&appid=fc18959c61498f546d6d4767cc27ef4c`

            const response = await fetch(url);
            const data = await response.json();
            const arrData = [data];

            city_name.innerText = `${arrData[0].name}, ${arrData[0].sys.country}`;

            temp_real_val.innerText = arrData[0].main.temp;
            //  temp_status.innerText=arrData[0].weather[0].main; No need of this data
            const tempMood = arrData[0].weather[0].main;
            //  condition to check sunny and clody
            if (tempMood == "Clear") {
                temp_status.innerHTML = "<i class='fas fa-sun' style='color:#eccc68;'></i>";
            }
            else if (tempMood == "Clouds") {
                temp_status.innerHTML = "<i class='fas fa-cloud' style='color:#f1f2f6;'></i>";

            }
            else if (tempMood == "Rain") {
                temp_status.innerHTML = "<i class='fas fa-cloud-rain' style='color:#a4b0be;'></i>";
            }
            else {
                temp_status.innerHTML = "<i class='fas fa-cloud' style='color:#f1f2f6;'></i>";
            }
            datahide.classList.remove('data_hide');





        }
        catch {
            city_name.innerHTML = "Plz enter city name properly";
            datahide.classList.add('data_hide');
        }
    }
})

