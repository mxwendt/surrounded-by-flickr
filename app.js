var images = [

];

// Argon setup
var context = Argon.immersiveContext;
var options = THREE.Bootstrap.createArgonOptions(context);
options.renderer = {klass: THREE.CSS3DRenderer};
var three = THREE.Bootstrap(options);
var eyeOrigin = three.argon.objectFromEntity(context.eyeOrigin);
var root = new THREE.Object3D();

addPlane(-1000);
addPlane(1000);
// addRandomImage(-1000);
// addRandomImage(1000);

eyeOrigin.add(root);

function addPlane(z) {
  var element = document.createElement('div');
  element.className = 'plane';
  // element.style.backgroundColor = 'rgba(0,127,127,' + ( Math.random() * 0.5 + 0.25 ) + ')';
  element.style.backgroundColor = 'rgba(0,127,127,1)';

  var object = new THREE.CSS3DObject(element);
  object.matrixAutoUpdate = false;

  plane.position.x = 0;
  plane.position.y = 0;
  plane.position.z = z;

  root.add(object);
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
