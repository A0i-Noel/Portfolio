import './App.css';
import { Canvas, useFrame } from "@react-three/fiber";
import { useRef, useState } from "react";
import { config, useSpring, animated } from "@react-spring/three"

const Box = ( props ) => {
  const ref = useRef();
  const [clicked, setClicked] = useState(false);
  const [hovered, setHovered] = useState(false);

  useFrame(() => (ref.current.rotation.x += 0.01));
  useFrame(() => (ref.current.rotation.y += 0.005));

  const { scale } = useSpring({
    scale: hovered ? 2: 1.3,
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

const CenterObject = ( props ) => {
  const centerRef = useRef();
  const [clicked, setClicked] = useState(false);
  const [hovered, setHovered] = useState(false);

  useFrame(() => (centerRef.current.rotation.x += 0.01));
  useFrame(() => (centerRef.current.rotation.y += 0.005));

  const { scale } = useSpring({
    scale: hovered ? 2: 1.3,
    config: config.wobbly
  })

  return (
    <animated.mesh {...props}
    ref = {centerRef}
    onClick={() => setClicked(!clicked) }
     onPointerOver = {() => setHovered(true)}
     onPointerOut = {() => setHovered(false)}
     scale={scale}>
      <boxGeometry args={[1,1,1]} />
      <meshStandardMaterial color={hovered ? "gray" : "#cd4f28"} />
    </animated.mesh>
  );
}

function App() {
  return (
    <>
      <div id="canvas-container">
        <Canvas>
            <Box position={[-4,0,0]} /> {/* left Box will be used for Portfolio */}
            <CenterObject position={[0,0,0]} />
            <Box position={[4,0,0]} />  {/* right Box will be used for Contact(Still thinking) */}
            <spotLight position={[10,10,10]} angle={0.15} penumbra={1} intensity={3} />
            <ambientLight intensity={0.2} />
            <pointLight position={[-10,-10,-10]} />
        </Canvas>
      </div>
      <h1 className='title'>Aoi Kuriki Portfolio</h1>
      <p className='subtitle'>start-up company,"subitt": CoFounder and CTO</p>
      <a href='#'>More</a>
    </>
  );
}

export default App;
