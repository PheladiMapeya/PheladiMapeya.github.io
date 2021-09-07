let tempValue1 = document.getElementById('temp-value1')!;
let tempValue2 = document.getElementById('temp-value2')!;
let tempValue3 = document.getElementById('temp-value3')!;
let loc1 = document.getElementById('location1');
let loc2 = document.getElementById('location2');
let loc3 = document.getElementById('location3');


window.addEventListener("load", () => {
    if(loc1) {
        const API_URL = "http://api.openweathermap.org/data/2.5/weather?q=johannesburg&appid=02d9064b9ef20ab93d12b832adac539b"


        fetch(API_URL)
        .then((response) => {
            return response.json();
            
        })
        .then(data => {
            const {feels_like} = data.main;
            tempValue1.textContent = Math.round(feels_like-273).toString();
 
        })
    }
    if(loc2) {
        const API_URL1 = "http://api.openweathermap.org/data/2.5/weather?q=Durban&appid=02d9064b9ef20ab93d12b832adac539b"


        fetch(API_URL1)
        .then((response) => {
            return response.json();
            
        })
        .then(data => {
            const {feels_like} = data.main;
            tempValue2.textContent = Math.round(feels_like-273).toString();

        })
    }
    if(loc3) {
        const API_URL = "http://api.openweathermap.org/data/2.5/weather?q=cape town&appid=02d9064b9ef20ab93d12b832adac539b"


        fetch(API_URL)
        .then((response) => {
            return response.json();
            
        })
        .then(data => {
            const {feels_like} = data.main;
            tempValue3.textContent = Math.round(feels_like-273).toString();

        })
    }
})



