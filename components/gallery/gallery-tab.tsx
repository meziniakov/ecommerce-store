import { Image as ImageType } from "@/types/types"
import Image from "next/image"
import React from "react"

interface GalleryTabProps {
    image: ImageType
}

const GalleryTab: React.FC<GalleryTabProps> = ({image}) => {
    return (
        <div>
            {/* <Image fill src='https://i.imgur.com/TF0pXdL.jpeg' alt='Image'/> */}
            </div>
    )
}
export default GalleryTab