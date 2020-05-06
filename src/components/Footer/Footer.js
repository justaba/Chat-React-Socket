import React from 'react'
import './Footer.css'

class Footer extends React.Component {
    
    render() {
        let date = new Date().getFullYear()
        return (
            <footer>
            © {date} 
            </footer>
        )
    }
}

export default Footer