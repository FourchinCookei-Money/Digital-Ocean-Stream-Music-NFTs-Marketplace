import React, { Component } from "react";
import logo from "../logo.png";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow">
          <a
            className="navbar-brand col-sm-3 col-md-2 mr-0"
            href="https://ud.me/digitaloceanstream.nft"
            target="_blank"
            rel="noopener noreferrer"
          >
            Digital Ocean Stream NFT
          </a>
        </nav>
        <div className="container-fluid mt-5">
          <div className="row">
            <main role="main" className="col-lg-12 d-flex text-center">
              <div className="content mr-auto ml-auto">
                <a
                  href="https://ud.me/digitaloceanstream.nft"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={logo} className="App-logo" alt="logo" />
                </a>
                <h1>Digital Ocean Stream NFT</h1>
                <p>
                  A centralized data on a decentralized platform for the
                  creative one. Now Music Artists & Art Artists will have the
                  opportunity to collaborate, developing Music NFTs. With each
                  Stream Play is paid.
                </p>
                <a
                  className="App-link"
                  href="http://www.oceanstream.xyz"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Join Digital Ocean Stream NFT{" "}
                  <u>
                    <b>Today </b>
                  </u>
                </a>
              </div>
            </main>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
