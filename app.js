var images = [

];

// Argon setup
var context = Argon.immersiveContext;
var options = THREE.Bootstrap.createArgonOptions(context);
options.renderer = {klass: THREE.CSS3DRenderer};
var three = THREE.Bootstrap(options);
var eyeOrigin = three.argon.objectFromEntity(context.eyeOrigin);
var root = new THREE.Object3D();

// addPlane(-1000);
// addPlane(1000);

var vector = new THREE.Vector3(0, 0, 0);

for (var i = 0; i < 20; i++) {
  addPlane();
}
// addRandomImage(-1000);
// addRandomImage(1000);

eyeOrigin.add(root);

function addPlane() {
  var element = document.createElement('div');
  element.className = 'plane';

  var ratio = Math.random();
  element.style.width = ratio * 160 + 'px';
  element.style.height = ratio * 90 + 'px';

  var object = new THREE.CSS3DObject(element);
  object.matrixAutoUpdate = false;

  var phi = getRandomInt(1, 30) * 0.175 + Math.PI;

  object.position.x = 900 * Math.sin( phi * (-1) );
  object.position.y = 0
  object.position.z = 900 * Math.cos( phi * (-1) );

  vector.x = object.position.x * 2 * (-1);
  vector.y = object.position.y * (-1);
  vector.z = object.position.z * 2 * (-1);

  object.lookAt(vector);

  root.add(object);

  object.updateMatrix();
}

// Creates a plane with an image to place in space
function addRandomImage(z) {
  var geometry = new THREE.PlaneGeometry(16, 9, 1, 1);
  var material = new THREE.MeshBasicMaterial({color: 0xffff00, side: THREE.DoubleSide});
  var plane = new THREE.Mesh(geometry, material);
  plane.position.x = 0;
  plane.position.y = 0;
  plane.position.z = z;
  root.add(plane);
}

// Returns a random integer between min (included) and max (excluded)
// Using Math.round() will give you a non-uniform distribution!
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
