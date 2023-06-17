import { StaticImageData } from "next/image";
import { useState } from "react";
import { Menu } from './Menu'
import ProductDetails from "./[slug]/page";

interface HookspageProps {
  params: { _id: string };
}

const Hookspage =  ({ params }: HookspageProps) => {
    const [selectedImage, setSelectedImage] = useState<StaticImageData>(Menu[0].image);

   
    const initialValue = 0
    const [quantity, setQuantity] = useState(initialValue)

    const increment = () => {
        setQuantity(a => a + 1)
    }
    const decrement = () => {
        quantity === 0 ? '' : setQuantity(a => a - 1)

    }

    const handleImageClick = (image: StaticImageData) => {
        setSelectedImage(image);
    };


    const IProps={
      Incfun:increment,
      Decfun:decrement,
      ImageClick:handleImageClick
    }
  return (
    <div>
      <ProductDetails myProps={IProps} params={params}  />
    </div>
  )
}

export default Hookspage
