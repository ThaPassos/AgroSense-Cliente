import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF, Environment } from "@react-three/drei";
import { Suspense } from "react";

interface ModelProps {
  modelPath: string;
  scale?: number;
  position?: [number, number, number];
}

function Model({ modelPath, scale = 1, position = [0, 0, 0] }: ModelProps) {
  const { scene } = useGLTF(modelPath);
  return <primitive object={scene} scale={scale} position={position} />;
}

interface ModelViewer3DProps {
  modelPath: string;
  scale?: number;
  position?: [number, number, number];
  className?: string;
}

export default function ModelViewer3D({ 
  modelPath="/pimenta.glb" , 
  scale = 1, 
  position = [0, 0, 0],
  className = "w-full h-[400px]"
}: ModelViewer3DProps) {
  return (
    <div className={className}>
      <Canvas camera={{ position: [0, 2, 5], fov: 50 }}>
        <Suspense fallback={null}>
          
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} intensity={1} />
          <pointLight position={[-10, -10, -10]} intensity={0.5} />
          
          
          <Model modelPath={modelPath} scale={scale} position={position} />
          
          
          <Environment preset="sunset" />
          
          
          <OrbitControls 
            enableZoom={false}
            enablePan={true}
            enableRotate={true}
            maxDistance={10}
            minDistance={2}
          />
        </Suspense>
      </Canvas>
    </div>
  );
}
