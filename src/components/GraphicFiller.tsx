import React from 'react'
import logo1 from '../assets/logos/Logo_Futuristic_Golfball.png'
import logo2 from '../assets/logos/Logo_Resturant_admin_board.png'
import logo3 from '../assets/logos/Logo_Swirllingball.png'
import logo4 from '../assets/logos/Logo_all_logos_thogether.png'
import logo5 from '../assets/logos/Logo_course_green_flagg.png'
import logo6 from '../assets/logos/Logos_General_All_categories.png'

const logos = [logo1, logo2, logo3, logo4, logo5, logo6]

interface GraphicFillerProps {
    index?: number
    className?: string
    style?: React.CSSProperties
}

const GraphicFiller: React.FC<GraphicFillerProps> = ({ index = 0, className = '', style = {} }) => {
    const logoSrc = logos[index % logos.length]

    return (
        <div
            className={`graphic-filler ${className}`}
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                opacity: 0.8,
                margin: '2rem 0',
                ...style
            }}
        >
            <img
                src={logoSrc}
                alt="Decorative Element"
                style={{
                    maxWidth: '100%',
                    maxHeight: '300px',
                    objectFit: 'contain',
                    filter: 'drop-shadow(0 4px 6px rgba(0,0,0,0.1))'
                }}
            />
        </div>
    )
}

export default GraphicFiller
