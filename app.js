var images = [

];

// Argon setup
var context = Argon.immersiveContext;
var options = THREE.Bootstrap.createArgonOptions(context);
options.renderer = {klass: THREE.CSS3DRenderer};
var three = THREE.Bootstrap(options);
var eyeOrigin = three.argon.objectFromEntity(context.eyeOrigin);

// Create a plane with an image to place in space
var geometry = new THREE.PlaneGeometry(16, 9, 1, 1);
var material = new THREE.MeshBasicMaterial({color: 0xffff00, side: THREE.DoubleSide});
var plane = new THREE.Mesh(geometry, material);
plane.position.x = 0;
plane.position.y = 0;
plane.position.z = -1000;

eyeOrigin.add(plane);
