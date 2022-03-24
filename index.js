let villeChoisie;
let option ={
    enableHighAccuracy:true
}

if("geolocation" in navigator){

    navigator.geolocation.watchPosition((position)=>{
        const url = 'https://api.openweathermap.org/data/2.5/weather?lon='+ position.coords.longitude+'&lat='+position.coords.latitude +'&appid=dc8c9152e8adaad0ec8bf635818c0d42&units=metric';
       
        axios.get(url)
            .then((response)=>{
                response = response.data
                console.log(response);
                $('#ville').text(response.name);
                $('#temperature_label').text(response.main.temp)
            })
            .catch((error)=>{
                console.log(error);
            })
    }, erreur, option);

}
else{

    villeChoisie = 'Paris';
    recevoirTemperature(villeChoisie);
}



let changerDeVille = document.querySelector('#changer');
changerDeVille.addEventListener('click', () => {
  villeChoisie = prompt('Quelle ville souhaitez-vous voir ?');
  recevoirTemperature(villeChoisie);
});

function erreur(){
    villeChoisie = 'Paris';
    recevoirTemperature(villeChoisie);
}


function recevoirTemperature(ville) {
    const url = 'https://api.openweathermap.org/data/2.5/weather?q='+ ville+'&appid=dc8c9152e8adaad0ec8bf635818c0d42&units=metric';
       
    axios.get(url)
        .then((response)=>{
            response = response.data
            console.log(response);
            $('#ville').text(response.name);
            $('#temperature_label').text(response.main.temp)
        })
        .catch((error)=>{
            console.log(error);
        })
}