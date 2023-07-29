//speed management from local storage 

var incrementButton = document.getElementById("incrementButton");
var decrementButton = document.getElementById("decrementButton");
var valueDisplay = document.getElementById("valueDisplay");

var value = parseInt(localStorage.getItem("speedValue")) || 5;

valueDisplay.textContent=value;


incrementButton.addEventListener("click",function(){
    if(value+1 < 50){
            valueDisplay.textContent=value++;
            storeValue();
        }
});
decrementButton.addEventListener("click",function(){
    if(value-1 > 3){
     valueDisplay.textContent=value--;
     storeValue();
     }
});
function storeValue() {
localStorage.setItem("speedValue", value);
}

//music management

var musicStatus=document.getElementById("musicSelect");

var storedMusicStatus = localStorage.getItem("musicPreference") || "on";

musicStatus.value=storedMusicStatus;

musicStatus.addEventListener("change",function(){
var selectedOption = musicSelect.value;
storeMusicPreference(selectedOption);
})

function storeMusicPreference(preference) {
localStorage.setItem("musicPreference", preference);
}





