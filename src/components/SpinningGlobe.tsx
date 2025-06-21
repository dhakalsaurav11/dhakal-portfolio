'use client';

import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

function Globe() {
  return (
    <mesh rotation={[0.5, 0.5, 0]}>
      <sphereGeometry args={[1.5, 32, 32]} />
      <meshBasicMaterial color="#3b82f6" wireframe />
    </mesh>
  );
}

export function SpinningGlobe() {
  return (
    <div className="w-full h-[300px] sm:h-[400px] md:h-[500px]">
      <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
        <ambientLight />
        <Globe />
        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={1.2} />
      </Canvas>
    </div>
  );
}
