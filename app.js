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
  "11.jpg",
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
  "11.jpg",
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

// Retrieve the immersive context
var context = Argon.immersiveContext;

// Initialize Three.js rendering
var options = THREE.Bootstrap.createArgonOptions(context);
options.renderer = {klass: THREE.CSS3DRenderer};
var three = THREE.Bootstrap(options);

// Get the origin
var eyeOrigin = three.argon.objectFromEntity(context.eyeOrigin);

// Add the root object
var root = new THREE.Object3D();

// Create a vetor for helix positioning
var vector = new THREE.Vector3(0, 0, 0);

// Add all images to the root
for (var i = 0; i < images.length; i++) {
  addPlane(images[i]);
}

// Add root to the scene
eyeOrigin.add(root);

/**
 * Adds a plane with an image mapped onto it
 */
function addPlane(url) {
  var ratio = Math.random() + 0.5;

  var element = document.createElement('div');
  element.className = 'plane';
  element.style.width = ratio * 160 + 'px';
  element.style.height = ratio * 90 + 'px';
  element.style.backgroundImage = 'url(images/' + url + ')';

  var object = new THREE.CSS3DObject(element);
  object.matrixAutoUpdate = false;

  positionImage(object);

  root.add(object);
}

/*+
 * Positions images in space around root
 */
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

/**
 * Returns a random integer between min (included) and max (excluded)
 * Using Math.round() will give you a non-uniform distribution!
 */
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
