let weatherData, userInput;

const $title = $('#title');
const $temp = $('#temp');
const $index = $('#index');
const $desc = $('#desc');
const $input = $('input[type="text"]');

const API_Key = '3ef3ac19f4ab74e5d4cc0765c07ba5a2';
const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather?q=';

$('form').on('submit', handleGetData);

function handleGetData (event) {

   event.preventDefault();
    // calling preventDefault() on a 'submit' event will prevent a page refresh  
 userInput = $input.val();
   // getting the user input
console.log(userInput)
    $.ajax(BASE_URL + userInput + '&appid=' + API_Key + '&units=imperial')
     .then(function(data) {
         weatherData = data;
         render();
     }, function(error) {
         console.log('Error:', error);
     });
    
}
 function render() {
    $title.text(weatherData.name);
    $temp.text(weatherData.main.temp);
    $index.text(weatherData.main.feels_like);
    $desc.text(weatherData.weather[0].description);
 }