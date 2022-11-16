import { useContext } from "react"
import { AuthContext } from "../../context/AuthContext"
import { NavLink } from "react-router-dom";
import "./header.scss"


export const Header = () => {
  

    const auth = useContext(AuthContext)
    const logOutHandler = event => {
        event.preventDefault()
        auth.logout()
    
    }

    return (
            <>
                <header>
                    <div className="nav-wrapper">
                    <div className="logo-container">
                    <NavLink to="/">
                        <img
                        className="logo"
                        src="https://i.imgur.com/gea725J.png"
                        alt="Logo"
                        />
                        </NavLink>
                    </div>
                    <nav>
                        <input className="hidden" type="checkbox" id="menuToggle" />
                        <label className="menu-btn" htmlFor="menuToggle">
                        <div className="menu" />
                        <div className="menu" />
                        <div className="menu" />
                        </label>
                        <div className="nav-container">
                        <ul className="nav-tabs">
                          <NavLink to="/about-page" className="nav-tab">About</NavLink>
                            <NavLink to = '/faqs-page' className="nav-tab">FAQs</NavLink>
                            <NavLink to = '/size-page'  className="nav-tab">Size Table</NavLink>
                            <NavLink to = '/media-page' className="nav-tab">Media</NavLink>
                            <NavLink to = '/blog-page' className="nav-tab">Blog</NavLink>
                            <NavLink href="/" className="nav-tab" onClick={logOutHandler}>Logout</NavLink>
                        </ul>
                        </div>
                    </nav>
                    </div>
                </header>
               


      
            </>
    )
}