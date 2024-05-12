import React from 'react'
import { images } from './slider.ts'
import SimpleImageSlider from "react-simple-image-slider";
import "./Slider.css"

export const Slider: React.FC = () => {
    return (
        <div >
            <div className='Slider'>
                <SimpleImageSlider
                    width={1096}
                    height={504}
                    images={images}
                    showBullets={true}
                    showNavs={true}

                />
            </div>
        </div>
    )
}
