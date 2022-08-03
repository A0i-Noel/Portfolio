import './App.css';
import { Canvas, useFrame } from "@react-three/fiber";
import { useRef, useState } from "react";
import { config, useSpring, animated } from "@react-spring/three"

const Box = ( props ) => {
  const ref = useRef();
  const [clicked, setClicked] = useState(false);
  const [hovered, setHovered] = useState(false);

  useFrame(() => (ref.current.rotation.x += 0.01));

  const { scale } = useSpring({
    scale: hovered ? 1.8: 1,
    config: config.wobbly
  })

  return (
     <animated.mesh {...props} 
     ref = {ref} 
     onClick={() => setClicked(!clicked) }
     onPointerOver = {() => setHovered(true)}
     onPointerOut = {() => setHovered(false)}
     scale={scale}  > 
          <boxGeometry args={[1,1,1]}/>
          <meshStandardMaterial color={hovered ? "#cd4f28" : "#1f1f1f"} />
    </animated.mesh>
  );
}

function App() {
  return (
    <>
      <div id="canvas-container">
        <Canvas>
            <Box position={[-4,0,0]} />
            <Box position={[4,0,0]} />
            <spotLight position={[10,10,10]} angle={0.15} penumbra={1} intensity={3} />
            <ambientLight intensity={0.2} />
            <pointLight position={[-10,-10,-10]} />
        </Canvas>
      </div>
      <h1>Aoi Kuriki Portfolio</h1>
      <a href='#'>More</a>
    </>
  );
}

export default App;
