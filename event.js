var id, options;

function success(pos) {//get 'Position' object as an input
  var crd = pos.coords;//returns a 'Coordinates' object
  if (crd.heading && crd.speed) {//if speed is 0, heading is NaN
    console.log('Congratulations, you get the heading and speed');
    document.getElementById('speedRep').innerHTML=crd.speed;
    document.getElementsByTagName('img')[0].style.transform="rotate("+crd.heading+"deg)";
    navigator.geolocation.clearWatch(id);
  }
}

function error(err) {
  console.warn('ERROR(' + err.code + '): ' + err.message);
}

options = {
  enableHighAccuracy: false,
  timeout: Infinity,
  maximumAge: 0
};

id = navigator.geolocation.watchPosition(success, error, options);
