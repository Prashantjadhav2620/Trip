// import { Component } from "react";
// import "./NavbarStyles.css";
// import { MenuItems } from "./MenuItems";
// import singn from '../routes/singn'

// import { Link } from "react-router-dom";

// class Navbar extends Component {

//   state = { clicked: false };
//   handleClick = () => {
//     this.setState({ clicked: !this.state.clicked });
//   };

//   //   handleSignUpClick = () => {
// //     // Replace the string "/sign" with the desired URL of the signup page
// //     //window.open("/Signup", "Signup");
// //     this.props.history.push("/singn");
// //   };

//   render() {
//     return (
//       <nav className="NavbarItems">
//         <h1 className="Navbar-logo">Trippy </h1>

//         <div className="menu-icons" onClick={this.handleClick}>
//           <i
//             className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}
//           ></i>
//         </div>

//         <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
//           {MenuItems.map((item, index) => {
//             return (
//               <li key={index}>
//                 <Link className={item.cName} to={item.url}>
//                   <i className={item.icon}></i>
//                   {item.title}
//                 </Link>
//               </li>
//             );
//           })}
//           <button onClick="/singup">Sign Up</button>
//         </ul>
//       </nav>
//     );
//   }
// }

// export default Navbar;
import React, { Component } from "react";
import "./NavbarStyles.css";
import { MenuItems } from "./MenuItems";
import { Link } from "react-router-dom";

class Navbar extends Component {
  state = { clicked: false };

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };

  handleSignUpClick = () => {
    // Replace the string "/signup" with the desired URL of the signup page
    window.location.href = "/singup";
  };

  render() {
    return (
      <nav className="NavbarItems">
        <h1 className="Navbar-logo">Trippy</h1>

        <div className="menu-icons" onClick={this.handleClick}>
          <i
            className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}
          ></i>
        </div>

        <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
          {MenuItems.map((item, index) => (
            <li key={index}>
              <Link className={item.cName} to={item.url}>
                <i className={item.icon}></i>
                {item.title}
              </Link>
            </li>
          ))}
          <li>
            <button onClick={this.handleSignUpClick}>Sign Up</button>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
