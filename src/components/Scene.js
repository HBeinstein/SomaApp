/* ------------------- OG PLZ SAVE ---------------------*/

import React, { useRef, useEffect, Component } from 'react';
import * as THREE from 'three';
import { AmbientLight } from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import '../assets/css/animation.css';
// import OrbitControls from "three-orbitcontrols";

// //Canvas Size

// const canvasSize = {
//   height: '100vh',
//   width: '100vw',
//   backgroundColor: 'blue'
// }

// function Scene() {
//   const threeScene = useRef(null);
//   let renderer = new THREE.WebGLRenderer({antialias: true, alpha: true});
//   let scene = new THREE.Scene();
//   let camera = new THREE.PerspectiveCamera(
//     45, // vertical field of view
//     100/100, // aspect ratio
//     1, //near plane
//     1000 // 1000 //far plane
//   );
//   const renderScene = () => {
//     renderer.render(scene, camera)
//   }
  
//   useEffect(() => {
//     let width = threeScene.current.clientWidth;
//     let height = threeScene.current.clientHeight;

//     let loader = new GLTFLoader;

//     loader.load('./models/tRex/scene.gltf', gltf => {
//       console.log(gltf.scene);
//       scene.add(gltf.scene);
//     });

//     const resizeScene = () => {
//       width = threeScene.current.clientWidth;
//       height = threeScene.current.clientHeight;
//       renderer.setSize(width, height);
//       camera.aspect = width / height;
//       camera.updateProjectionMatrix();
//       // renderer.render( scene, camera );
//       renderScene();
//       // console.log(scene);
//       // window.removeEventListener('resize', resizeScene);
//     }

//     camera.position.set(0, 1, 10);
//     const ambient = new THREE.AmbientLight(0X404040, 10);
//     scene.add(ambient);
//     renderer.setSize(width, height);
//     // renderer.setPixelRatio(window.devicePixelRatio);
//     // camera.aspect = width / height;

//     threeScene.current.appendChild(renderer.domElement);
//     console.log('sup', renderer.domElement);
//     window.addEventListener('resize', resizeScene);
//     // renderer.render( scene, camera );

//     return () => {
//       window.removeEventListener('resize', resizeScene);
//       threeScene.current.removeChild(renderer.domElement);
      
//     }
    

//     // stop()
//   }, []);
    
//   console.log('jhglhjgkjfhdd')

    
//   return(
//     <React.Fragment>
//       { renderScene() }
//       <div className="threeScene" style={canvasSize} ref={threeScene}>
//       </div>
//     </React.Fragment>
//   );
// }

// export default Scene;

/* ------------------- OG PLZ SAVE ---------------------*/

/* ----------------------------------------*/
/* ----------------------------------------*/
/* ----------------------------------------*/
/* ----------------------------------------*/
/* ----------------------------------------*/

/* ------------------- NEW STUFF ---------------------*/

function Scene(props) {
  const { useRef, useEffect, useState } = React
  const mount = useRef(null)
  const [isAnimating, handleAnimation] = useState(true)
  const controls = useRef(null)
  
  useEffect(() => {
    let width = mount.current.clientWidth;
    let height = mount.current.clientHeight;
    let activelyAnimating;
    let tRex = null;

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000)
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })

    let loader = new GLTFLoader;

    loader.load('./models/tRex/scene.gltf', gltf => {
      scene.add(gltf.scene);
      tRex = gltf.scene.children[1];
      console.log(`trex ${tRex}`);
    });

    //Add light to scene
    const ambient = new THREE.AmbientLight(0X404040, 10);
    scene.add(ambient);

    //Set camera position
    camera.position.z = 4;

    //Set clear background color in conjunction with alpha:true in renderer & renderer size
    renderer.setClearColor( 0xffffff, 0);
    renderer.setSize(width, height);

    const renderScene = () => {
      renderer.render(scene, camera)
    }

    const handleResize = () => {
      width = mount.current.clientWidth
      height = mount.current.clientHeight
      renderer.setSize(width, height)
      camera.aspect = width / height
      camera.updateProjectionMatrix()
      renderScene()
    }

    console.log(` t rex is ${tRex}`);



    //Define animation actions here
    function animate () {
      // tRex.rotation.x += 0.01
      // tRex.rotation.y += 0.01

      renderScene()
      activelyAnimating = window.requestAnimationFrame(animate)
    }

    //Starts animation by requesting animation frame
    const startAnimation = () => {
      if (!activelyAnimating) {
        activelyAnimating = requestAnimationFrame(animate);
      }
    }

    //Ends animation by canceling animation frame
    const endAnimation = () => {
      cancelAnimationFrame(activelyAnimating);
      activelyAnimating = null;
    }

    //Append scene to DOM, start animation
    mount.current.appendChild(renderer.domElement);
    window.addEventListener('resize', handleResize);
    startAnimation();

    controls.current = { startAnimation, endAnimation };
    
    return () => {
      endAnimation();
      window.removeEventListener('resize', handleResize);
      mount.current.removeChild(renderer.domElement);

      scene.remove(tRex);
    }
  }, [])

  useEffect(() => {
    if (isAnimating) {
      controls.current.startAnimation();
    } else {
      controls.current.endAnimation();
    }
  }, [isAnimating])
  
  return (
    <React.Fragment>
      <div className="animation-container" ref={mount} onClick={() => handleAnimation(!isAnimating)} />
      <button className="end-mediation-button" onClick={props.endMediation}>End Meditation</button>
    </React.Fragment>
  );
}

export default Scene;