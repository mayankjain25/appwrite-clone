import {React,useState} from 'react'
// import {ReactComponent as Logo } from "../assets/appwrite_logo.svg"
// import Appwritelogo from "../assets/Appwritelogo.jsx"
import logo from "../assets/appwrite_logo.png"
import "../styles/Navbar.css"
import DarkModeToggle from "react-dark-mode-toggle";


const Navbar = () => {
    const [isDarkMode, setIsDarkMode] = useState(() => false);
    return (
        <div className='Navbar__container'>
            <div className='logo'>  
                {/* <Appwritelogo /> */}
                <img className="Navbar__brandlogo" src={logo} alt="sss"/>
            </div>  

            <div className='Navbar__links'>
                <div className='link'>Home</div>
                <div className='link'>Cloud</div>
                <div className='link'>Docs</div>
                <div className='link'>Community</div>
                <div className='link'><span style={{marginRight:"5px"}}><i class="fab fa-github"></i></span>Github</div>
               
            </div>

            <div className="Navbar__cont2">

                <div className='Navbar__darkmode'>
                <DarkModeToggle
                            onChange={setIsDarkMode}
                            checked={isDarkMode}
                            // size={80}
                            className='darktoggler'
                        />
                
                </div>

                <div className='Navbar__updates'>
                    Get Updates
                </div>
            </div>
            
        </div>
    )
}

export default Navbar
