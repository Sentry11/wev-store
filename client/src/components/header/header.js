import { useContext } from "react"
import { AuthContext } from "../../context/AuthContext"
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
                        <img
                        className="logo"
                        src="https://i.imgur.com/gea725J.png"
                        alt="Logo"
                        />
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
                          <a href="*" className="nav-tab">Home</a>
                            <a href="*" className="nav-tab">Products</a>
                            <a href="*" className="nav-tab">History</a>
                            <a href="*" className="nav-tab">FAQs</a>
                            <a href="*" className="nav-tab">Media</a>
                            <a href="/" className="nav-tab" onClick={logOutHandler}>Logout</a>
                        </ul>
                        </div>
                    </nav>
                    </div>
                </header>
                <div className="center">
                    {/* <h1>Resize window to 800px to toggle menu</h1> */}
                </div>


      
            </>
    )
}