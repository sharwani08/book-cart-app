import React from 'react'

export const Footer = () => {
    const footerStyle = {
        backgroundColor: "rgba(0, 0, 0, 0.2)",
        marginTop: "100%"
    }

  return (
    <footer className="bg-light text-center text-lg-start">
        <div className="text-center p-3" style={footerStyle}>
            © 2020 Copyright
        </div>
    </footer>
  )
}
