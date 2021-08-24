import React from 'react'
import './Button.css'

const STYLES = [
    'btn--primary',
    'btn--outline'
]

const SIZES = [
    'btn--medium',
    'btn--large',
    'hidden'
]

export const Button = ({
    children,
    type,
    onClick,
    buttonStyle,
    buttonSize,
    display,
    href
}) => {
      const checkStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0]
     const checkSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0]
     
    return(
         <button className={`btn ${checkStyle} ${checkSize}`} href={href} onClick={onClick} type={type} style={{display}}> 
        
            {children}
            </button>
    )
 }