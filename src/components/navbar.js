import React, {useState} from "react"
import {Link} from "gatsby"

const Navbar = () => {
  const [isOpen, setNav] = (useState(false))
  const toggleNav = () => {
    setNav(isOpen => !isOpen)
  }

  return (
    <div className="header-nav-container navbar-light">    
      <header>
        <div className="container py-2">
          <div className="row">
            <div className="col-md-8">
              <a href="/" className="navbar-brand lora">
                <h1 id="logo" className="sr-only">New Prairie Press</h1>
                <img aria-labelledby="logo" src="/assets/npp_logo2026_white.svg" height="120px" width="auto" className="navbar-brand-logo"/>
              </a>              
            </div>
          </div>
        </div>       
      </header>
      <div className="nav-scroller py-1">
        <div className="container navbar-expand-lg">
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <nav className="justify-content-between collapse navbar-collapse" id="navbarSupportedContent">
            <div className="dropdown show">
              <button className="nav-link text-dark dropdown-toggle" href="#" id="dropdownMenuLink" data-toggle="dropdown" aria-expanded="false">
                About
              </button>
              <div className="dropdown-menu">
                <a className="dropdown-item" href="/about">About Us</a>                
                <a className="dropdown-item" href="/our-team">Our Team</a>
                <a className="dropdown-item" href="/policies">Policies</a>
                <a className="dropdown-item" href="/rights-permissions">Rights and Permissions</a>
              </div>
            </div>
            <a className="nav-link text-dark" href="https://fulcrum.org/newprairiepress">Books</a>
            <a className="nav-link text-dark" href="/journals/">Journals</a>
            <div className="dropdown show">
              <button className="nav-link text-dark dropdown-toggle" href="#" id="dropdownMenuLink" data-toggle="dropdown" aria-expanded="false">
                Publish With Us
              </button>
              <div className="dropdown-menu">
              <a className="dropdown-item" href="/publish-with-us">Publishing With NPP</a>
                <a className="dropdown-item" href="/book-textbook-proposals">Book and Textbook Publishing</a>                
                <a className="dropdown-item" href="/journal-proposals">Journal Publishing</a>
                <a className="dropdown-item" href="/conference-proposals">Conference Publishing</a>                
              </div>
            </div>
            <a className="nav-link text-dark" href="/contact">Contact</a>
          </nav>
        </div>
      </div>
    </div>
  )
}

export default Navbar
