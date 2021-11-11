import React from 'react'

const Footer = () => {
    let date = new Date();
    let footerStyle = {
        position : "absolute",
        width: "100%",
        border : "2px solid silver"
    }
    return (
        <p className="bg-dark text-light text-center py-2" style={footerStyle}>Copyright &copy; {date.getFullYear()} Schedule List.</p>
    )
}

export default Footer
