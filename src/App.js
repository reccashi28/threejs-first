import { useRef } from 'react';
import logo from './logo.svg';
import './App.css';

import { Canvas, useFrame } from '@react-three/fiber';

const SpinningMesh = ({ position }) => {
  const mesh = useRef(null);

  useFrame(() => (mesh.current.rotation.x = mesh.current.rotation.y += 0.01))
  return (<mesh ref={mesh} position={position}>
    <boxBufferGeometry attach='geometry' args={[1, 1, 1]} />
    <meshStandardMaterial attach={'material'} color='lightblue' />
  </mesh>)
}

function App() {

  return (
    <Canvas colorManagement camera={{position: [-5, 2, 10], fov: 60}}>
      <ambientLight intensity={.3} />
      <SpinningMesh position={[0,1,0]} />
      <SpinningMesh position={[-2,1,-5]} />
      <SpinningMesh position={[5,1,-2]} />
    </Canvas>
  );
}

export default App;
