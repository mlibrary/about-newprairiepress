import React from 'react'
import {Link, graphql, useStaticQuery} from 'gatsby'

export const titleQuery = graphql`
{
  site {
    siteMetadata {
      title
    }
  }
}
`

const Footer = () => {
    const data = useStaticQuery(titleQuery)
    const {title} = data.site.siteMetadata
    const now = new Date()
    const year = now.getFullYear()

    return (
    <footer className="footer text-white">
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-md-4 contact">
            <a href="https://lib.k-state.edu/" className="block logo-link"><img src="/assets/ksu-lib-logo.png" alt="Kansas State University Libraries" height="auto" width="300" /></a>
            <span className="mt-3 text-light d-block">K-State Libraries<br/>
            Open Publishing Exchange<br/>
            1117 Mid-Campus Drive North<br/>
            Manhattan, KS 66506
            </span>          
            <span className="mt-3 text-light d-block"><a href="mailto:ope@k-state.edu" className="text-light">ope@k-state.edu</a></span>            
          </div>                    
          <div className="col-md-4">
            <ul className="list-unstyled second-nav">
              <li><a className="text-light" href="/about">About</a>
                <ul className="list-unstyled">
                  <li><a className="text-light" href="/policies">Policies</a></li>
                  <li><a className="text-light" href="/rights-permissions">Rights and Permissions</a></li>
                </ul>
              </li>
              <li><a className="text-light" href="https://fulcrum.org/newprairiepress">Books</a></li>
              <li><a className="text-light" href="/journals">Journals</a></li>
            </ul>
          </div>  
          <div className="col-md-4">
            <ul className="list-unstyled second-nav"> 
              <li>Publish With Us
                <ul className="list-unstyled">
                  <li><a className="text-light" href="/book-proposals">Book and Textbook Publishing</a></li>
                  <li><a className="text-light" href="/journal-proposals">Journal Publishing</a></li>
                  <li><a className="text-light" href="/conference-proposals">Conference Publishing</a></li>                  
                </ul>
              </li>
              <li><a className="text-light" href="/our-team">Our Team</a></li>
              <li><a className="text-light" href="/accessibility">Accessibility</a></li>
            </ul>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-md-8">
          <span className=" copyright text-light d-block mb-3 font-weight-normal">© {year}, New Prairie Press · <a className="text-light" target="_blank" href="https://fulcrum.org/preservation">Preservation</a> · <a className="text-light" target="_blank" href="https://fulcrum.org/privacy">Privacy</a> · <a className="text-light" target="_blank" href="https://fulcrum.org/terms">Terms</a></span>
          </div>
          <div className="col-md-4 text-right">
            <small className="text-white">Powered by</small> <a target="_blank" href="https://fulcrum.org/"><img className="fulcrum" src="/assets/fulcrum-full-white.svg" alt="Fulcrum logo" height="20" width="auto" /></a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
