import { useTexture } from '@react-three/drei'

export default function Mug(props)
{
    const reactMugTexture = useTexture('./Textures/JB_cup.png')
    const ThreejsMugTexture = useTexture('./Textures/AR_cup.jpg')
    const SymfonyMugTexture = useTexture('./Textures/PP_cup.jpg')
    const BlenderMugTexture = useTexture('./Textures/AZ2.jpg')


    return <>
      <mesh
        geometry={props.nodes.ReactMug.geometry}
        position={[0, 1, 0]}
      >
        <meshBasicMaterial map={reactMugTexture} map-flipY={false} />
      </mesh>

      <mesh
        geometry={props.nodes.ThreeJSMug.geometry}
        position={[0, 1, 0]}
      >
        <meshBasicMaterial map={ThreejsMugTexture} map-flipY={false} />

      </mesh>

      <mesh        
        geometry={props.nodes.SymfonyMug.geometry}
        position={[0, 1, 0]}
      >
        <meshBasicMaterial map={SymfonyMugTexture} map-flipY={false} />

      </mesh>
      
      <mesh    
        geometry={props.nodes.BlenderMug.geometry}
        position={[0, 1, 0]}
      >
        <meshBasicMaterial map={BlenderMugTexture} map-flipY={false} />

      </mesh>
    </>
}