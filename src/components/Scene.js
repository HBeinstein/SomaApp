import React, { useRef, useEffect, Component } from 'react';
import * as THREE from 'three';
import { AmbientLight } from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import '../assets/css/animation.css';
// import OrbitControls from "three-orbitcontrols";

function Scene(props) {
  const { useRef, useEffect, useState } = React
  const mount = useRef(null)
  const [isAnimating, handleAnimation] = useState(true)
  const controls = useRef(null)
  let tRex = null;
  
  useEffect(() => {
    let width = mount.current.clientWidth;
    let height = mount.current.clientHeight;
    let activelyAnimating;

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000)
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    

    let loader = new GLTFLoader;

    loader.load('./models/tRex/scene.gltf', gltf => {
      scene.add(gltf.scene);
      tRex = gltf;
    });

    console.log(tRex);
    //Add light to scene
    const ambient = new THREE.AmbientLight(0X404040, 10);
    scene.add(ambient);

    //Set camera position
    camera.position.z = 4;

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
    
    //Define animation actions in here-- will loop and handle animation
    function animate (value) {
      value *= 0.001;  // convert to seconds --> eventually put dynamic value here

      if (tRex) {
          tRex.scene.rotation.y = value;
      }

      renderer.render(scene, camera);
      requestAnimationFrame(animate)
    }

    console.log(tRex);

    //Append scene to DOM, start animation
    mount.current.appendChild(renderer.domElement);
    window.addEventListener('resize', handleResize);
    animate();
  }, [])  
    
  return ( 
    <React.Fragment>
      <div className="animation-container" ref={mount} />
      <button className="end-mediation-button" onClick={props.endMeditation}>End Meditation</button>
    </React.Fragment>
  );
} 

export default Scene;