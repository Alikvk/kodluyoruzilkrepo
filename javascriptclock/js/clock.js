//Input Name get from user
var nameInput = prompt("İsminizi giriniz");

// We read the document object to put the retrieved value inside the div with id "myName"
var myName = document.getElementById("myName");

//We add the data
myName.innerHTML = nameInput;

// Get DateTime now Function
function showTime() {
  let date = new Date();

  let weekdayNames = [
    "Pazartesi",
    "Salı",
    "Çarşamba",
    "Perşembe",
    "Cuma",
    "Cumartesi",
    "Pazar",
  ];
  let monthNames = [
    "Ocak",
    "Şubat",
    "Mart",
    "Nisan",
    "Mayıs",
    "Haziran",
    "Temmuz",
    "Ağustos",
    "Eylül",
    "Ekim",
    "Kasım",
    "Aralık",
  ];

  // DateTime Full Locale string convert with day and month name
  var dateString =
    date.getDate() +
    " " +
    monthNames[date.getMonth()] +
    " " +
    date.getFullYear() +
    " " +
    weekdayNames[date.getDay()] +
    " Saat " +
    date.getHours() +
    ":" +
    ("00" + date.getMinutes()).slice(-2) +
    ":" +
    ("00" + date.getSeconds()).slice(-2);

  var clock = document.getElementById("myClock");

  clock.innerHTML = dateString;

  let t = setTimeout(function () {
    showTime();
  }, 1000);
}

// window.onload();
