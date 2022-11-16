import { Parallax } from 'react-parallax';
import './about.scss'

import black from '../../assets/image/black.jpg'
import red from '../../assets/image/red.jpg'
import white from '../../assets/image/white.jpg'

export const About = () => {

    return (
        <div className='about-container'>
            <Parallax  bgImage={black}  strength={100} style={{height:'100vh'}}>
             
                <h1 className='about-header'> <span>Preview</span>  Content goes here. <br/> Lorem insput sone text klllsl  + test.</h1> 
           
               
           </Parallax>
        </div>
    )

}