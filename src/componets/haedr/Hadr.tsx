import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import foto1 from '../../img/icons8-главная-50.png';
import Foto2 from '../../img/icons8-тетрадь-50.png';
import Foto3 from '../../img/icons8-play-в-круге-50.png';
import Foto4 from '../../img/icons8-видеофайл-50.png';
import Foto5 from '../../img/icons8-книга-50.png';
import './hadr.css';
import { text } from './text.ts';
import MainHeader from '../main-haedr/MainHaedr.tsx';
import Albums from '../Albums/Albums.tsx';
import MainBody from '../MainBody/MainBody.tsx';

interface Itext{
    text:{text:string}[],
}

const Hadr: React.FC<Itext> = (text) => {
    const [visible, setVisible] = useState<boolean>(false);
    const [number, setNumber] = useState<number>(0);

    useEffect(() => {
        console.log(number);
    }, [number]);

    return (
        <BrowserRouter>
            <div>
                <MainHeader number={number} />
                <div className="icon-bec"
                    onMouseEnter={() => { setVisible(true) }}
                    onMouseLeave={() => { setVisible(false) }}
                >
                    <Link to='/'>
                        <div className="icon" onClick={() => setNumber(0)}>
                            <img src={foto1} alt="Icon 1" />
                            {visible && (
                                <div className='TextCss' style={{ marginLeft: "0.5rem", marginTop: "1rem" }}>
                                    {text[0].text}
                                </div>
                            )}
                        </div>
                    </Link>
                    <Link to='/Albums'>
                        <div className="icon" onClick={() => setNumber(1)}>
                            <img src={Foto2} alt="Icon 2" />
                            {visible && (
                                <div className='TextCss' style={{ marginLeft: "0.5rem" }}>
                                    {text[1].text}
                                </div>
                            )}
                        </div>
                    </Link>
                    <div className="icon" onClick={() => setNumber(2)}>
                        <img src={Foto3} alt="Icon 3" />
                        {visible && (
                            <div className='TextCss' style={{ marginLeft: "0.5rem" }}>
                                {text[2].text}
                            </div>
                        )}
                    </div>
                    <div className="icon" onClick={() => setNumber(3)}>
                        <img src={Foto4} alt="Icon 4" />
                        {visible && (
                            <div className='TextCss' style={{ marginLeft: "0.5rem" }}>
                                {text[3].text}
                            </div>
                        )}
                    </div>
                    <div className="icon" onClick={() => setNumber(4)}>
                        <img src={Foto5} alt="Icon 5" />
                        {visible && (
                            <div className='TextCss' style={{ marginLeft: "0.5rem" }}>
                                {text[4].text}
                            </div>
                        )}
                    </div>
                </div>
                <div className="klok"></div>
                <Routes>
                <Route path='/' element={<MainBody Image="" mainT="" />} />

                    <Route path='/Albums' element={<Albums />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default Hadr;
