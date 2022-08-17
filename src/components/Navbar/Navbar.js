import React, { Component } from 'react'
import {MenuItems} from "./MenuItems"
import { Button } from "../Button"
import "./Navbar.css"


class Navbar extends Component  {
   state = { clicked: true }

   handleClick = () => {
     this.setState({ clicked: !this.state.clicked})
   }
   render(){
    return (
      <nav className="NavbarItems">
            <h1 className="navbar-logo"> React <i className="fa-brands fa-react"></i></h1>
            <div className="menu-icon" onClick={this.handleClick}>
              <i className={this.state.clicked ? 'fa-solid fa-bars'  :  'fa-solid fa-x'}></i>
            </div>
        <ul className={this.state.clicked ? 'nav-menu active'  : 'nav-menu'}>
           {MenuItems.map((item, index) => {
              return(
                <li key={index}> 
                     <a className={item.cName}  href={item.url}> 
                     {item.title}
                     </a>
                </li>

              )
           })}

        </ul>
         <Button> Գրանցվել </Button>
     </nav>
    )
  }
} 
 export default Navbar