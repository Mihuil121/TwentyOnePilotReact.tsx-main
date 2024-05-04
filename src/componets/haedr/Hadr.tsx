import React, { useEffect, useState } from 'react';
import foto1 from '../../img/icons8-главная-50.png';
import Foto2 from '../../img/icons8-тетрадь-50.png';
import Foto3 from '../../img/icons8-play-в-круге-50.png';
import Foto4 from '../../img/icons8-видеофайл-50.png';
import Foto5 from '../../img/icons8-книга-50.png';
import './hadr.css';
import { text } from './text.ts';
import MainHaedr from '../main-haedr/MainHaedr.tsx';



const Hadr: React.FC = () => {

    const [visible, setVisible] = useState<boolean>(false);
    let [number, setNumber] = useState<number>(0)

    useEffect(() => {
        console.log(number);
    }, [number]);

    return (
        <div>
            <MainHaedr number={number} />
            <div className="icon-bec"
                onMouseEnter={() => { setVisible(true) }}
                onMouseLeave={() => { setVisible(false) }}

            >
                <div className="icon" onClick={() => {
                    setNumber(0);

                }}>
                    <img src={foto1} />
                    {visible && (
                        <div className='TextCss'
                            style={{
                                marginLeft: "0.5rem",
                                marginTop: "1rem"
                            }}>
                            {text[0].text}
                        </div>
                    )}

                </div>
                <div className="icon"
                    onClick={() => {
                        setNumber(1);

                    }}
                >
                    <img src={Foto2} />
                    {visible && (
                        <div
                            className='TextCss' style={{
                                marginLeft: "0.5rem"
                            }}>
                            {text[1].text}
                        </div>
                    )}
                </div>
                <div className="icon" onClick={() => {
                    setNumber(2);

                }}>
                    <img src={Foto3} />
                    {visible && (
                        <div
                            className='TextCss' style={{
                                marginLeft: "0.5rem"
                            }}>
                            {text[2].text}
                        </div>
                    )}
                </div>
                <div className="icon" onClick={() => {
                    setNumber(3);

                }}>
                    <img src={Foto4} />
                    {visible && (
                        <div
                            className='TextCss' style={{
                                marginLeft: "0.5rem"
                            }}>
                            {text[3].text}
                        </div>
                    )}
                </div>
                <div className="icon" onClick={() => {
                    setNumber(4);

                }}>
                    <img src={Foto5} />
                    {visible && (
                        <div
                            className='TextCss' style={{
                                marginLeft: "0.5rem"
                            }}>
                            {text[4].text}
                        </div>
                    )}
                </div>
            </div>

        </div>
    )

}

export default Hadr
