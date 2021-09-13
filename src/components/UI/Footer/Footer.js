import React from "react";
import classes from './Footer.module.css';
import TrianglesShapes from '../../../assets/images/triangles_Shape.svg';
import OwnerImage from '../../../assets/images/Owner.jpg';

const Footer = () => {

    return (
        <footer className={classes.Footer}>
            <h3>All Rights Reserved For</h3>
            <a href='https://www.facebook.com/A.sni9er/' rel="noreferrer" target='_blank' ><img className={classes.OwnerImage} src={OwnerImage} alt='Owner' /></a>
            <p>Designed & Coded at 28 / 04 & 04 / 09 / 2021</p>
            {/* Shapes */}
            <img src={TrianglesShapes} style={{top: '1rem', left: '1rem'}} alt={'Shape'} className={classes.Shape}/>
            <img src={TrianglesShapes} style={{top: '1rem', right: '1rem'}} alt={'Shape'} className={classes.Shape}/>
            <img src={TrianglesShapes} style={{bottom: '1rem', left: '1rem'}} alt={'Shape'} className={classes.Shape}/>
            <img src={TrianglesShapes} style={{bottom: '1rem', right: '1rem'}} alt={'Shape'} className={classes.Shape}/>
        </footer>
    )
}

export default Footer;