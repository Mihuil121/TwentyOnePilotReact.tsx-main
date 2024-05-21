import React from 'react'
import './MainBody.css'
import { MainText } from './Main.ts'
import { who } from './Main.ts'
import { Slider } from '../Slider/Slider.tsx'


interface Itype {
  Image: string;
  mainT: string;
}

const MainBody: React.FC<Itype> = ({ Image, mainT }) => {
  return (
    <div>
      <div className="Bacgraund">
        <div className="blockTextP">
          <p className='whoText'>
            <Slider />
            <div style={{ marginTop: '8rem' }}>
              {who}
            </div>
          </p>
          <div style={{ display: 'flex' }}>
            {MainText.map((textImg: { mainT: string, Image: string }, index) => (
              <div className="blocCart" style={{ margin: "1rem 1rem" }} key={index}>
                <div className="cartText">
                  <p className='cartTextP'>
                    {textImg.mainT}
                  </p>
                  <img src={textImg.Image} alt="photo" className='photo' />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainBody;