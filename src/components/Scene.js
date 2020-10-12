import React, { useRef, useEffect, Component } from 'react';
import * as THREE from 'three';
import { AmbientLight } from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import '../assets/css/scene.css';
import './../assets/css/index.css'

function Scene(props) {
  const { useState } = React;
  const mount = useRef(null);
  const [isAnimating, handleAnimation] = useState(true);

  const controls = useRef(null);
  let base = null;
  let backgroundColor = "teal";

  const scene = new THREE.Scene();
  
  if(props.axisVal.zAxis > 1){
    backgroundColor = "blue";
    console.log("blue")
  } else {
    backgroundColor = "teal";
    console.log("teal")
  }

  useEffect(() => {

    let width = mount.current.clientWidth;
    let height = mount.current.clientHeight;

    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000)
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    const loader = new GLTFLoader;

    //Load and position model, add to scene, assign model to variable
    loader.load('./models/background1.gltf', gltf => {
      gltf.scene.position.set(0, -10, 10);
      scene.add(gltf.scene);
      base = gltf;
    });

    // console.log(base);
    //Add light to scene
    const ambient = new THREE.AmbientLight(0X404040, 10);
    //  const directional = new THREE.DirectionalLight(0X404040, 10);
    scene.add(ambient);
    // scene.add(directional);

    // Set camera position
    camera.position.z = 25;
    camera.position.x = 0;
    camera.position.y = 0;
    // camera.lookAt(0, 0, 0);
  
    //Set clear background color in conjunction with alpha:true in renderer & renderer size  
    renderer.setClearColor( 0xffffff, 0);
    renderer.setSize(width, height);

    //Handle re-render when window is resized (triggered via event listener)
    const handleResize = () => {
      width = mount.current.clientWidth
      height = mount.current.clientHeight
      renderer.setSize(width, height)
      camera.aspect = width / height
      camera.updateProjectionMatrix()
      animate()
    }

    // const vector = new THREE.Vector3();
    // camera.getWorldDirection(vector)
    
    const controls = new OrbitControls(camera, renderer.domElement);

    // How far you can orbit vertically, upper and lower limits.
    // Range is 0 to Math.PI radians.
    controls.minPolarAngle = 0; // radians
    controls.maxPolarAngle = Math.PI/2; // radians

    // How far you can orbit horizontally, upper and lower limits.
    // If set, must be a sub-interval of the interval [ - Math.PI, Math.PI ].
    controls.minAzimuthAngle = - Infinity; // radians
    controls.maxAzimuthAngle = Infinity; // radians

    // controls.screenSpacePanning = false;
    controls.enableZoom = false;
    controls.update();

    //Eventually define animation actions in here-- will loop and handle animation
    function animate (value) {

      // if (base) {
      //   //animations go here
      // }

      renderer.render(scene, camera);
      requestAnimationFrame(animate);
      controls.update();
    }

    //Append scene to DOM, start animation
    mount.current.appendChild(renderer.domElement);
    window.addEventListener('resize', handleResize);
    animate();
  }, [])   
    
  return ( 
    <React.Fragment>
      <div className={backgroundColor} id="animation-container" ref={mount} />
      <button className="end-meditation-button" onClick={props.endMeditation}>End meditation</button>
    </React.Fragment>
  ); 
} 

 
export default Scene;