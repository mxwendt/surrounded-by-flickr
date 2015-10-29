var images = [
  "1.jpg",
  "2.jpg",
  "3.jpg",
  "4.jpg",
  "5.jpg",
  "6.jpg",
  "7.jpg",
  "8.jpg",
  "9.jpg",
  "10.jpg",
  "11.jpg"
];

// Argon setup
var context = Argon.immersiveContext;
var options = THREE.Bootstrap.createArgonOptions(context);
options.renderer = {klass: THREE.CSS3DRenderer};
var three = THREE.Bootstrap(options);
var eyeOrigin = three.argon.objectFromEntity(context.eyeOrigin);
var root = new THREE.Object3D();

var vector = new THREE.Vector3(0, 0, 0);

for (var i = 0; i < images.length; i++) {
  window.setInterval(function() {
    addPlane(images[i]);
  }, i * 100);
}

eyeOrigin.add(root);

function addPlane(url) {
  var ratio = Math.random();

  var element = document.createElement('div');
  element.className = 'plane';
  element.style.width = ratio * 160 + 'px';
  element.style.height = ratio * 90 + 'px';
  element.style.backgroundImage = 'url(images/' + url + ')';

  var object = new THREE.CSS3DObject(element);
  object.matrixAutoUpdate = false;

  positionImage(object);

  root.add(object);

  animate(object);
}

function animate(object) {
  window.setInterval(function() {
    positionImage(object);
    animate(object);
  }, 3000);
}

function positionImage(object) {
  var phi = getRandomInt(1, 30) * 0.175 + Math.PI;

  object.position.x = 900 * Math.sin( phi * (-1) );
  object.position.y = 0;
  object.position.z = 900 * Math.cos( phi * (-1) );

  vector.x = object.position.x * 2 * (-1);
  vector.y = object.position.y * (-1);
  vector.z = object.position.z * 2 * (-1);

  object.lookAt(vector);

  object.updateMatrix();
}

// Returns a random integer between min (included) and max (excluded)
// Using Math.round() will give you a non-uniform distribution!
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
