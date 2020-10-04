import React, { useRef, useEffect, Component } from 'react';
import * as THREE from 'three';
import * as GLTFLoader from 'three/examples/jsm/loaders/GLTFLoader';
// import OrbitControls from "three-orbitcontrols";

//Canvas Size

const canvasSize = {
  height: '100vh',
  width: '100vw',
}

function Scene() {
  const threeScene = useRef(null);

  useEffect(() => {
    let width = threeScene.current.clientWidth;
    let height = threeScene.current.clientHeight;

    let scene = new THREE.Scene();

    let camera = new THREE.PerspectiveCamera(
      45, // vertical field of view
      window.innerWidth/window.innerHeight, // aspect ratio
      1, //near plane
      500 //far plane
    );

    let renderer = new THREE.WebGLRenderer({antialias: true, alpha:true});
    renderer.setSize(width, height);
    renderer.setPixelRatio(window.devicePixelRatio);

    // let loader = new GLTFLoader;
    //loader.load(FILE PATH HERE, function(gltf){
      //scene.add(MODELNAMEHERE);
    //);
    
    const resizeScene = () => {
      width = threeScene.current.clientWidth;
      height = threeScene.current.clientHeight;
      console.log(threeScene.current, threeScene.current.clientWidth);
      renderer.setSize(width, height);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.render( scene, camera );
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