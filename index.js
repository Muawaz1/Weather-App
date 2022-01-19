var button = document.querySelector(".button")
var inputValue = document.querySelector(".inputValue")
var cityName = document.querySelector(".cityName")
var countryName = document.querySelector(".countryName")
var temp = document.querySelector(".temp")
var pressure = document.querySelector(".pressure")
var wind = document.querySelector(".wind")
var desc = document.querySelector(".desc")

button.addEventListener('click', async function(){
    await fetch('http://api.openweathermap.org/data/2.5/weather?q='+inputValue.value+'&appid=a74260e5a8ce54585270dda750cd577e')
    .then(res => res.json())
    .then( data => {
      console.log(data);
      cityName.innerHTML = `${data['name']}, `;
      countryName.innerHTML = data['sys']['country'];
      temp.innerHTML =data['main']['temp'];
      pressure.innerHTML = `pressure: ${data['main']['pressure']} mb`;; 
      wind.innerHTML =`wind: ${data['wind']['speed']} kmph`;
      desc.innerHTML =`description: ${data['weather'][0]['description']}`;
    })
    .catch(err =>alert("Wrong City Name"))
})
showWeather()

