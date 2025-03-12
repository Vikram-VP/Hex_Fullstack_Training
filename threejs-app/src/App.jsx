import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import ProductImageDisplay from "./components/product_images";

function App() {
  return (
    <div 
      style={{ 
        height: "100vh", 
        display: "flex", 
        flexDirection: "column", 
        justifyContent: "center", 
        alignItems: "center"
      }}
    >
      <h3 style={{ marginBottom: "10px" }}>Anime</h3>

      <Canvas camera={{ position: [0, 0, 7] }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} />
        <ProductImageDisplay />
        <OrbitControls />
      </Canvas>
    </div>
  );
}

export default App;
