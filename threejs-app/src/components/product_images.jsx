import { useRef, useState } from "react";
import { useTexture } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

function ProductImageDisplay() {
  const [index, setIndex] = useState(0);
  const productRef = useRef();
  const hoverRef = useRef(false);
  const indexRef = useRef(0);
  const hoverSpeed = 0.05;

  const productImages = [
    "/images/ani1.jpg",
    "/images/ani2.jpeg",
    "/images/ani3.jpeg",
    "/images/ani4.jpeg",
    "/images/ani5.jpeg"
  ];

  const texture = useTexture(productImages[index]);

  useFrame(() => {
    if (hoverRef.current) {
      indexRef.current += hoverSpeed;
      let newIndex = Math.floor(indexRef.current) % productImages.length;
      if (newIndex !== index) {
        setIndex(newIndex);
      }
    }
  });

  return (
    <mesh
      ref={productRef}
      onPointerEnter={() => (hoverRef.current = true)}
      onPointerOut={() => (hoverRef.current = false)}
    >
      <planeGeometry args={[4, 4]} />
      <meshStandardMaterial map={texture} />
    </mesh>
  );
}

export default ProductImageDisplay;


//hover=false,index=0 --- first image is
//hover=true,0.1,0.2,0.3,0.4,0.5,0.6