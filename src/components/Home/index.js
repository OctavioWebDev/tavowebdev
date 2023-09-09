import LogoTitle from '../../assets/images/logo_o.png'
import { Link } from 'react-router-dom';
import Loader from 'react-loaders'
import './index.scss';
import { useEffect, useState } from 'react';
import AnimatedLetters from '../AnimatedLetters';
import bubblePopSound from '../../assets/soap-bubbles-pop-96873.mp3';



const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = ['c', 't', 'a', 'v', 'i', 'o',',']
    const jobArray = ['A',' ','w', 'e', 'b',' ','d', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r', '.']
    const audio = new Audio(bubblePopSound);


    useEffect(() => {
        const timer = setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 4000);
        
        return () => clearTimeout(timer);
    }, []);

    const handleHover = () => {
        audio.play();
    };
    
    return (
        <>
            <div className="container home-page">
                <div className="text-zone">
                    <h1>
                        <span className={letterClass} onMouseEnter={handleHover}>H</span>
                        <span className={`${letterClass} _12`} onMouseEnter={handleHover}>i</span>
                        <br/>
                        <span className={`${letterClass} _13`} onMouseEnter={handleHover}>I</span>
                        <span className={`${letterClass} _14`} onMouseEnter={handleHover}>'m</span>
                    <img src={LogoTitle} alt="developer"/>
                    <AnimatedLetters 
                        letterClass={letterClass} 
                        strArray={nameArray} 
                        idx={15}
                        />
                    <br />
                    <AnimatedLetters 
                        letterClass={letterClass} 
                        strArray={jobArray} 
                        idx={22}
                        />
                    </h1>
                    <h2>Fullstack Developer / JavaScript</h2>
                    <Link to="/contact" className="flat-button">CONTACT ME</Link>
                </div>
            </div>
            <Loader type="pacman" />
        </>
    );
}
    
export default Home;
    