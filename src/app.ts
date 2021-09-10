let tempValue1 = document.getElementById('temp-value1')!;
let tempValue2 = document.getElementById('temp-value2')!;
let tempValue3 = document.getElementById('temp-value3')!;
let loc1 = document.getElementById('location1');
let loc2 = document.getElementById('location2');
let loc3 = document.getElementById('location3');
let tempIcon = document.getElementById('weatherIcon')! as HTMLImageElement;
let tempIcon1 = document.getElementById('weatherIcon1')! as HTMLImageElement;
let tempIcon2 = document.getElementById('weatherIcon2')! as HTMLImageElement;
let tempDesc = document.getElementById('desc')!;
let tempDesc1 = document.getElementById('desc1')!;
let tempDesc2 = document.getElementById('desc2')!;


window.addEventListener("load", () => {
    if(loc1) {
        const API_URL = "https://api.openweathermap.org/data/2.5/weather?q=johannesburg&appid=02d9064b9ef20ab93d12b832adac539b"


        fetch(API_URL)
        .then((response) => {
            return response.json();
            
        })
        .then(data => {
            const {feels_like} = data.main;
            tempValue1.innerHTML = Math.round(feels_like-273).toString();
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
    }
    if(loc2) {
        const API_URL1 = "https://api.openweathermap.org/data/2.5/weather?q=Durban&appid=02d9064b9ef20ab93d12b832adac539b"


        fetch(API_URL1)
        .then((response) => {
            return response.json();
            
        })
        .then(data => {
            const {feels_like} = data.main;
            tempValue2.innerHTML = Math.round(feels_like-273).toString();
            const {id, description} = data.weather[0];

            if(id < 232) {
                tempIcon1.src = "https://openweathermap.org/img/wn/11d@2x.png";  
                tempDesc1.innerHTML = description;
            }else
            if(id < 321){
                tempIcon1.src = "https://openweathermap.org/img/wn/09d@2x.png";
                tempDesc1.innerHTML = description;
            }else
            if(id < 511){
                tempIcon1.src = "https://openweathermap.org/img/wn/10d@2x.png";
                tempDesc1.innerHTML = description;
            }else
            if(id < 531){
                tempIcon1.src = "https://openweathermap.org/img/wn/09d@2x.png";
                tempDesc1.innerHTML = description;
            }else
            if(id === 531){
                tempIcon1.src = "https://openweathermap.org/img/wn/13d@2x.png";
                tempDesc1.innerHTML = description;
            }else
            if(id < 622){
                tempIcon1.src = "https://openweathermap.org/img/wn/13d@2x.png";
                tempDesc1.innerHTML = description;
            }else
            if(id < 781){
                tempIcon1.src = "https://openweathermap.org/img/wn/50d@2x.png";
                tempDesc1.innerHTML = description;
            }else
            if(id === 800){
                tempIcon1.src = "https://openweathermap.org/img/wn/01d@2x.png";
                tempDesc1.innerHTML = description;
            }else
            if(id === 801){
                tempIcon1.src = "https://openweathermap.org/img/wn/02d@2x.png";
                tempDesc1.innerHTML = description;
            }else
            if(id === 802){
                tempIcon1.src = "https://openweathermap.org/img/wn/03d@2x.png";
                tempDesc1.innerHTML = description;
            }else
            if(id > 802){
                tempIcon1.src = "https://openweathermap.org/img/wn/04d@2x.png";
                tempDesc1.innerHTML = description;
            }
            

            

        })
    }
    if(loc3) {
        const API_URL = "https://api.openweathermap.org/data/2.5/weather?q=cape town&appid=02d9064b9ef20ab93d12b832adac539b"


        fetch(API_URL)
        .then((response) => {
            return response.json();
            
        })
        .then(data => {
            const {feels_like} = data.main;
            tempValue3.innerHTML = Math.round(feels_like-273).toString();
            const {id, description} = data.weather[0];

            if(id < 232) {
                tempIcon2.src = "https://openweathermap.org/img/wn/11d@2x.png";  
                tempDesc2.innerHTML = description;
            }else
            if(id < 321){
                tempIcon2.src = "https://openweathermap.org/img/wn/09d@2x.png";
                tempDesc2.innerHTML = description;
            }else
            if(id < 511){
                tempIcon2.src = "https://openweathermap.org/img/wn/10d@2x.png";
                tempDesc2.innerHTML = description;
            }else
            if(id < 531){
                tempIcon2.src = "https://openweathermap.org/img/wn/09d@2x.png";
                tempDesc2.innerHTML = description;
            }else
            if(id === 531){
                tempIcon2.src = "https://openweathermap.org/img/wn/13d@2x.png";
                tempDesc2.innerHTML = description;
            }else
            if(id < 622){
                tempIcon2.src = "https://openweathermap.org/img/wn/13d@2x.png";
                tempDesc2.innerHTML = description;
            }else
            if(id < 781){
                tempIcon2.src = "https://openweathermap.org/img/wn/50d@2x.png";
                tempDesc2.innerHTML = description;
            }else
            if(id === 800){
                tempIcon2.src = "https://openweathermap.org/img/wn/01d@2x.png";
                tempDesc2.innerHTML = description;
            }else
            if(id === 801){
                tempIcon2.src = "https://openweathermap.org/img/wn/02d@2x.png";
                tempDesc2.innerHTML = description;
            }else
            if(id === 802){
                tempIcon2.src = "https://openweathermap.org/img/wn/03d@2x.png";
                tempDesc2.innerHTML = description;
            }else
            if(id > 802){
                tempIcon2.src = "https://openweathermap.org/img/wn/04d@2x.png";
                tempDesc2.innerHTML = description;
            }

        })
    }
})



