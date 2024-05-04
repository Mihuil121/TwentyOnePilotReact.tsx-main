import React, { useEffect, useState } from 'react'
import './MainHaedr.css'
import { textImg } from './DivText.ts'

const MainHaedr = ({ number }) => {

  const [active, setActive] = useState<boolean>(false)


  useEffect(() => {
    setActive(true);


    const time = setTimeout(() => {
      setActive(false);
    }, 500);

    return () => clearTimeout(time);
  }, [number]);
  return (
    <div className="HaedrMain">
      <div className={`textP ${active ? 'active' : ''}`}>


        <img className='img' src={textImg[number].img} alt={textImg[number].text} />
        <p className='pText'>{textImg[number].text}</p>

      </div>
    </div >
  )
}

export default MainHaedr
