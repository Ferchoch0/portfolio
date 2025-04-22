import React, { useRef } from 'react';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { TextureLoader } from 'three';
import radarImg from '../assets/radar.png';
import { OrbitControls, Html } from '@react-three/drei';
import {
  FaReact,
  FaJs,
  FaCss3Alt,
  FaGitAlt,
  FaGithub
} from 'react-icons/fa';
import {
  SiTailwindcss,
  SiVite
} from 'react-icons/si';
import { TbBrandThreejs } from 'react-icons/tb';

function FloatingIcon({ position, Icon }) {
    const ref = useRef();
  
    useFrame(({ clock }) => {
      if (ref.current) {
        const t = clock.getElapsedTime();
        const floatX = Math.sin(t + position[0]) * 0.1;
        const floatY = Math.cos(t + position[1]) * 0.1;
        const floatZ = Math.sin(t + position[1] + position[0]) * 0.5; // este es el truquito
  
        const scale = 1 - floatZ * 0.1; // ajusta cuán chico se hace al ir “atrás”
  
        ref.current.position.x = position[0] + floatX;
        ref.current.position.y = position[1] + floatY;
        ref.current.position.z = floatZ;
  
        ref.current.scale.set(scale, scale, scale); // escala suave
        ref.current.rotation.y += 0.01;
      }
    });
  
    return (
      <group ref={ref} position={position}>
        <Html center>
          <Icon className="text-white text-4xl drop-shadow-md transition-transform duration-300" />
        </Html>
      </group>
    );
  }



const iconPositions = [
    { icon: FaReact, position: [0.5, 2.4, 0.3] },
    { icon: FaJs, position: [2.2, 1.3, -0.5] },
    { icon: SiTailwindcss, position: [2.6, -0.6, 0.4] },
    { icon: FaCss3Alt, position: [1.2, -2.3, -0.3] },
    { icon: TbBrandThreejs, position: [-0.2, -2.8, 0.7] },
    { icon: SiVite, position: [-1.9, -2.1, -0.5] },
    { icon: FaGitAlt, position: [-2.6, -0.8, 0.6] },
    { icon: FaGithub, position: [-1.8, 1.8, -0.2] },
  ];

  

function Code() {

    const radarTexture = useLoader(TextureLoader, radarImg);

  return (
    <div className="w-full h-[500px] relative overflow-hidden">
        {/* Fondo fijo */}
        <img
            src={radarImg}
            alt="Radar background"
            className="absolute top-0 left-0 w-full h-full object-cover opacity-10 z-0 pointer-events-none"
        />

        {/* Canvas encima */}
        <Canvas camera={{ position: [0, 0, 5] }} className="relative z-10 opacity-70">
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} />

            <OrbitControls enableZoom={false} autoRotate />

            {iconPositions.map(({ icon: Icon, position }, i) => (
            <FloatingIcon key={i} position={position} Icon={Icon} />
            ))}
        </Canvas>
        </div>
  );
}

export { Code };
