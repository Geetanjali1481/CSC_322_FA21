
// import THREE
import * as THREE from 'https://threejsfundamentals.org/threejs/resources/threejs/r132/build/three.module.js';
// import Orbit controls
import { OrbitControls } from 'https://cdn.jsdelivr.net/npm/three@0.121.1/examples/jsm/controls/OrbitControls.js';


// create a render and set the size
var renderer = new THREE.WebGLRenderer();
renderer.setClearColor(new THREE.Color(0x000000));
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

// create a camera, which defines where we're looking at.
var camera = new THREE.PerspectiveCamera( 45, window.innerWidth/window.innerHeight, 0.1, 1000 );

// create a scene, that will hold all our elements such as objects, cameras and lights.
var scene = new THREE.Scene();


// show axes in the screen
var axes = new THREE.AxesHelper(20);
scene.add(axes);


const verticesOfTriangles = new Float32Array( [
	0.0, 0.0,  0.0,
	1.0, 0.0,  0.0,
	1.0,  1.0,  0.0,

	0.0,  0.0,  0.0,
	1.0,  1.0,  0.0,
	0.0, 1.0,  0.0,
  
  0.0, 0.0, 0.0,
  1.0, 0.0, 1.0,
  0.0,0.0,1.0,
  
  0.0, 0.0, 0.0,
  1.0, 0.0, 0.0,
  1.0,0.0,1.0,
  
  1.0, 0.0, 0.0,
  1.0, 1.0, 0.0,
  1.0,0.0,1.0,
  
  1.0, 1.0, 0.0,
  1.0, 1.0, 1.0,
  1.0,0.0,1.0,
  
  0.0, 0.0, 0.0,
  0.0, 1.0, 1.0,
  0.0, 0.0, 1.0,
  
  0.0, 0.0, 0.0,
  0.0, 1.0, 0.0,
  0.0, 1.0, 1.0,
  
  0.0, 1.0, 0.0,
  1.0, 1.0, 1.0,
  0.0, 1.0,1.0,
  
  0.0, 1.0, 0.0,
  1.0, 1.0, 0.0,
  1.0, 1.0, 1.0,
  
  0.0, 0.0, 1.0,
  1.0, 1.0, 1.0,
  0.0, 1.0, 1.0,
  
  0.0, 0.0, 1.0,
  1.0, 0.0, 1.0,
  1.0, 1.0,1.0

] );

//create geometry with given vertices (separate triangles)
const geometry = new THREE.BufferGeometry();
geometry.setAttribute( 'position', new THREE.BufferAttribute( verticesOfTriangles, 3) );

//add wireframe of the shape
const wireframe = new THREE.WireframeGeometry( geometry );
const line = new THREE.LineSegments( wireframe );
line.material.depthTest = false;
line.material.opacity = 0.5;
line.material.transparent = true;
line.position.set(0,0,0); 
scene.add(line);

// itemSize = 3 because there are 3 values (components) per vertex
geometry.setAttribute( 'position', new THREE.BufferAttribute( verticesOfTriangles, 3) );
// compute vertex normals
geometry.computeVertexNormals ();
//const material = new THREE.MeshBasicMaterial( { color: 0xff0000 } );
const material = new THREE.MeshNormalMaterial();
const mesh = new THREE.Mesh( geometry, material );
mesh.position.set(2,0,0); 
scene.add(mesh);


// position and point the camera to the center of the scene
//camera.position.set(30, 0, 0); //looking down along x-direction
//camera.position.set(0, 30, 0); //looking down along y-direction
camera.position.set(0, 0, 10); //looking down along z-direction


// import Orbit controls
var controls = new OrbitControls (camera, renderer.domElement);

// add ambient light
var color = 0xFFFFFF;
var intensity = 10;
var light = new THREE.AmbientLight(color, intensity);
scene.add(light);

// add target light
const color2 = 0xFFFFFF;
const intensity2 = 1;
const light2 = new THREE.DirectionalLight(color2, intensity2);
light2.position.set(0, 0, 100);
light2.target.position.set(-5, 0, 0);
scene.add(light2);
scene.add(light2.target);

// render the scene
//renderer.render( scene, camera );
//controls.update();

// render the scene
var animate = function(){
	requestAnimationFrame(animate);
	renderer.render( scene, camera );
  controls.update();
}

animate();




