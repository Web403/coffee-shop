import React from "react";
import mainbg from "../assets/mainbg1.jpg"

const navbar = () => {
    return (
        <div container>
            <div className="nav-main">
                <div id="nav-left">
                    <ul>
                        <li>Home</li>
                        <li>About</li>
                        <li></li>
                    </ul>
                </div>
                <div id="logo">Coffee Piyo</div>
                <div id="nav-right">
                    <ul>
                        <li>Dashboard</li>
                        <li>Products</li>
                    </ul>
                    {/* <div id="searchbar">
                        <input id="search" type="text" placeholder="Search Something..."></input>
                    </div> */}
                </div>
            </div>
            <div id="main-box">
                <div id="main-text">
                <div id="right-blur"></div>
                    <p id="main1">Welcome to, </p>
                <h1>Coffee Piyo</h1>
                <p id="main2">Lorem ipsum dolor, sit amet consectetur adipisicing elit.re<br></br> nesciunt repellendus sequi quaerat ut aliquid amet<br></br> quisquam voluptas, necessitatibus accusamus doloremque?</p>
                <button id="btn1" type="submit">Order</button>
                <button id="btn2">Location</button>
                </div>
                <img id="mainbg" src={mainbg}></img>
            </div>
        </div>
    );
}

export default navbar;