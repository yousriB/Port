"use client"

import { useRef, useState } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { OrbitControls, Environment, Text, Float } from "@react-three/drei"
import * as THREE from "three"

const CODE_SNIPPETS = [
  `const project = {\n  name: "Portfolio",\n  tech: ["React", "Three.js", "Next.js"],\n  status: "Awesome!"\n}`,
  `function greetVisitor() {\n  return "Hello World!";\n}`,
  `npm install creativity\nnpm run innovation`,
  `git commit -m "Built something amazing"\ngit push origin master`
]

function FloatingTerminal() {
  const group = useRef<THREE.Group>(null!)
  const [codeIndex, setCodeIndex] = useState(0)
  const [hovered, setHovered] = useState(false)
  
  useFrame((state) => {
    const t = state.clock.getElapsedTime()
    group.current.rotation.x = THREE.MathUtils.lerp(
      group.current.rotation.x,
      hovered ? Math.sin(t) * 0.1 : 0,
      0.1
    )
    group.current.rotation.y = t * 0.1
    group.current.position.y = Math.sin(t * 0.5) * 0.1
  })

  const changeCode = () => {
    setCodeIndex((prev) => (prev + 1) % CODE_SNIPPETS.length)
  }

  return (
    <group 
      ref={group}
      onClick={changeCode}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      <Float speed={1} rotationIntensity={0.5} floatIntensity={0.5}>
        {/* Terminal body */}
        <mesh castShadow receiveShadow>
          <boxGeometry args={[3, 2, 0.2]} />
          <meshStandardMaterial 
            color="#1e1e1e" 
            metalness={0.5} 
            roughness={0.7} 
          />
        </mesh>

        {/* Screen */}
        <mesh position={[0, 0, 0.11]} castShadow>
          <planeGeometry args={[2.8, 1.8]} />
          <meshStandardMaterial 
            color="#011627" 
            emissive="#0066ff" 
            emissiveIntensity={0.05}
          />
        </mesh>

        {/* Code text */}
        <Text
          position={[-1.2, 0.6, 0.12]}
          fontSize={0.12}
          color="#d6deeb"
          font="https://fonts.gstatic.com/s/sourcecodepro/v22/HI_SiYsKILxRpg3hIP6sJ7fM7PqlPevT.ttf"
          anchorX="left"
          anchorY="top"
          maxWidth={2.6}
          lineHeight={1.2}
          letterSpacing={0.02}
        >
          {CODE_SNIPPETS[codeIndex]}
        </Text>

        {/* Terminal header */}
        <Text
          position={[0, 1.1, 0.12]}
          fontSize={0.15}
          color="#f78c6c"
          font="https://fonts.gstatic.com/s/sourcecodepro/v22/HI_SiYsKILxRpg3hIP6sJ7fM7PqlPevT.ttf"
        >
          terminal.js
        </Text>

        {/* Buttons */}
        <mesh position={[-1.3, 1.05, 0.12]}>
          <sphereGeometry args={[0.08, 16, 16]} />
          <meshStandardMaterial color="#ff5f56" />
        </mesh>
        <mesh position={[-1.1, 1.05, 0.12]}>
          <sphereGeometry args={[0.08, 16, 16]} />
          <meshStandardMaterial color="#ffbd2e" />
        </mesh>
        <mesh position={[-0.9, 1.05, 0.12]}>
          <sphereGeometry args={[0.08, 16, 16]} />
          <meshStandardMaterial color="#27c93f" />
        </mesh>
      </Float>
    </group>
  )
}

export default function CodeTerminalScene() {
  return (
    <Canvas shadows camera={{ position: [0, 0, 5], fov: 50 }}>
      <color attach="background" args={["#0a0a0a"]} />
      <ambientLight intensity={0.5} />
      <spotLight 
        position={[10, 10, 10]} 
        angle={0.15} 
        penumbra={1} 
        intensity={2} 
        castShadow 
      />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#0066ff" />
      <FloatingTerminal />
      <Environment preset="city" />
      <OrbitControls 
        enableZoom={true}
        enablePan={true}
        autoRotate={true}
        autoRotateSpeed={0.5}
        minDistance={3}
        maxDistance={10}
      />
    </Canvas>
  )
}