let loc = document.getElementById('location');
let tempValue = document.getElementById('temp-value');
let tempUnit = document.getElementById('temp-unit');
let tempIcon = document.getElementById('weatherIcon');
let tempDesc = document.getElementById('description');
const searchButton = document.getElementById('search-button');
const searchInput = document.getElementById('searchCity');


searchButton.addEventListener('click', (e) => {
    e.preventDefault();
    getWeather(searchInput.value);
    searchInput.value='';
});

const getWeather = async (city) =>
{
    try{

        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=dab3af44de7d24ae7ff86549334e45bd` );

        const weatherData = await response.json();
        const{name} = weatherData;
        const{feels_like} = weatherData.main;
        const{id,description} = weatherData.weather[0];
        loc.textContent = name;
        tempValue.textContent = Math.round(feels_like-273).toString();

                if(id < 232) {
                    tempIcon.src = "https://openweathermap.org/img/wn/11d@2x.png"; 
                    tempDesc.innerHTML = description;
                    
                }else
                if(id < 321){
                    tempIcon.src = "https://openweathermap.org/img/wn/09d@2x.png";
                    tempDesc.innerHTML = description;
                }else
                if(id < 511){
                    tempIcon.src = "https://openweathermap.org/img/wn/10d@2x.png";
                    tempDesc.innerHTML = description;
                }else
                if(id < 531){
                    tempIcon.src = "https://openweathermap.org/img/wn/09d@2x.png";
                    tempDesc.innerHTML = description;
                }else
                if(id === 531){
                    tempIcon.src = "https://openweathermap.org/img/wn/13d@2x.png";
                    tempDesc.innerHTML = description;
                }else
                if(id < 622){
                    tempIcon.src = "https://openweathermap.org/img/wn/13d@2x.png";
                    tempDesc.innerHTML = description;
                }else
                if(id < 781){
                    tempIcon.src = "https://openweathermap.org/img/wn/50d@2x.png";
                    tempDesc.innerHTML = description;
                }else
                if(id === 800){
                    tempIcon.src = "https://openweathermap.org/img/wn/01d@2x.png";
                    tempDesc.innerHTML = description;
                }else
                if(id === 801){
                    tempIcon.src = "https://openweathermap.org/img/wn/02d@2x.png";
                    tempDesc.innerHTML = description;
                }else
                if(id === 802){
                    tempIcon.src = "https://openweathermap.org/img/wn/03d@2x.png";
                    tempDesc.innerHTML = description;
                }else
                if(id > 802){
                    tempIcon.src = "https://openweathermap.org/img/wn/04d@2x.png";
                    tempDesc.innerHTML = description;
                }
    }

    catch(error) {
        alert('City Not Found');
    }
}

window.addEventListener("load", () => {
    let lon;
    let lat;
  
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        lon = position.coords.longitude;
        lat = position.coords.latitude;
        const API_URL = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=02d9064b9ef20ab93d12b832adac539b`;

        fetch(API_URL)
        .then((response) => {
            return response.json();
            
        })
        .then(data => {
            console.log(data)
            const {name} = data;
            loc.textContent = name;
            const {feels_like} = data.main;
            tempValue.textContent = Math.round(feels_like-273).toString();
            const {id, description} = data.weather[0];

            if(id < 232) {
                tempIcon.src = "https://openweathermap.org/img/wn/11d@2x.png"; 
                tempDesc.innerHTML = description;
                 
            }else
            if(id < 321){
                tempIcon.src = "https://openweathermap.org/img/wn/09d@2x.png";
                tempDesc.innerHTML = description;
            }else
            if(id < 511){
                tempIcon.src = "https://openweathermap.org/img/wn/10d@2x.png";
                tempDesc.innerHTML = description;
            }else
            if(id < 531){
                tempIcon.src = "https://openweathermap.org/img/wn/09d@2x.png";
                tempDesc.innerHTML = description;
            }else
            if(id === 531){
                tempIcon.src = "https://openweathermap.org/img/wn/13d@2x.png";
                tempDesc.innerHTML = description;
            }else
            if(id < 622){
                tempIcon.src = "https://openweathermap.org/img/wn/13d@2x.png";
                tempDesc.innerHTML = description;
            }else
            if(id < 781){
                tempIcon.src = "https://openweathermap.org/img/wn/50d@2x.png";
                tempDesc.innerHTML = description;
            }else
            if(id === 800){
                tempIcon.src = "https://openweathermap.org/img/wn/01d@2x.png";
                tempDesc.innerHTML = description;
            }else
            if(id === 801){
                tempIcon.src = "https://openweathermap.org/img/wn/02d@2x.png";
                tempDesc.innerHTML = description;
            }else
            if(id === 802){
                tempIcon.src = "https://openweathermap.org/img/wn/03d@2x.png";
                tempDesc.innerHTML = description;
            }else
            if(id > 802){
                tempIcon.src = "https://openweathermap.org/img/wn/04d@2x.png";
                tempDesc.innerHTML = description;
            }

 
        })
    })
    }

})



