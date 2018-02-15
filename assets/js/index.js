//public key : 32eb2ecb38bf7d2d31bcdcb676a1fe09
//private key : 140b8ba4edd28ec260d489346c80062ae657c294
//hash : 07500f6561c816303c97989484108432

document.getElementById('search-carachter').addEventListener('click', cargarJSON);

function cargarJSON() {

  fetch('https://gateway.marvel.com:443/v1/public/characters?apikey=32eb2ecb38bf7d2d31bcdcb676a1fe09&ts=9&hash=07500f6561c816303c97989484108432')
    .then(function(response){
      //console.log(response);
      return response.json();
    })
    .then(function(data) {
      console.log(data);
    });
}

