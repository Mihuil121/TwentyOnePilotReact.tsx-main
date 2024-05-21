import React from 'react'
import { imagesData } from './slider.ts'
import SimpleImageSlider from "react-simple-image-slider";
import "./Slider.css"

interface Iimge{
    imagesData:{url:string}[]
}

export const Slider: React.FC<Iimge> = () => {
    return (
        <div >
            <div className='Slider'>
                <SimpleImageSlider
                    width={1096}
                    height={504}
                    images={imagesData}
                    showBullets={true}
                    showNavs={true}

                />
            </div>
        </div>
    )
}
