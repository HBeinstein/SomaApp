import React, { useRef, useEffect, Component } from 'react';
import * as THREE from 'three';
import { AmbientLight } from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
// import OrbitControls from "three-orbitcontrols";

//Canvas Size

const canvasSize = {
  height: '100vh',
  width: '100vw',
  backgroundColor: 'blue'
}

function Scene() {
  const threeScene = useRef(null);
  let scene = new THREE.Scene();

  let camera = new THREE.PerspectiveCamera(
    45, // vertical field of view
    window.innerWidth/window.innerHeight, // aspect ratio
    1, //near plane
    // 1000 //far plane
  );
  let renderer = new THREE.WebGLRenderer({antialias: true, alpha: true});

  let loader = new GLTFLoader;
  loader.load('./models/tRex/scene.gltf', gltf => {
    console.log(gltf.scene)
    scene.add(gltf.scene);
  });
  
  useEffect(() => {
    let width = threeScene.current.clientWidth;
    let height = threeScene.current.clientHeight;

    camera.position.set(0, 1, 10);

    const ambient = new THREE.AmbientLight(0X404040, 10);
    scene.add(ambient);

    renderer.setSize(width, height);
    renderer.setPixelRatio(window.devicePixelRatio);

    const resizeScene = () => {
      width = threeScene.current.clientWidth;
      height = threeScene.current.clientHeight;
      renderer.setSize(width, height);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.render( scene, camera );
      console.log(scene);
      window.removeEventListener('resize', resizeScene);
    }
    
    threeScene.current.appendChild(renderer.domElement)
    window.addEventListener('resize', resizeScene)

    renderer.render( scene, camera );
  });
    
  return(
    <React.Fragment>
      <div className="threeScene" style={canvasSize} ref={threeScene}>
      </div>
    </React.Fragment>
  );
}

export default Scene;