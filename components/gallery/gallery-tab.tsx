import { cn } from "@/lib/utils"
import { Image as ImageType } from "@/types/types"
import { Tab } from "@headlessui/react"
import Image from "next/image"
import React from "react"

interface GalleryTabProps {
    image: ImageType
}

const GalleryTab: React.FC<GalleryTabProps> = ({image}) => {
    return (
        <Tab className='relative flex items-center justify-center bg-white rounded-md cursor-pointer aspect-square'>
            {({selected}) => (
                <div>
                    <span className="absolute h-full w-full aspect-square inset-0 overflow-hidden rounded-md">
                        <Image fill src={image.url} alt='Image' className="object-cover object-center"/>
                    </span>
                    <span className={cn(
                        'absolute inset-0 ring-2 rounded-md ring-offset-2', 
                        selected ? 'ring-black' : 'ring-transparent'
                    )}>
                    </span>
                </div>
            )}
            </Tab>
    )
}
export default GalleryTab