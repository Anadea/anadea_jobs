import React, {useState} from 'react'
import {socialLinks} from '../../constants/social-links'
import VacanciesCount from "../VacanciesCount/VacanciesCount";
import {graphql, useStaticQuery, Link} from "gatsby";
import { scroller } from "react-scroll";


const Footer = () => {
  const data = useStaticQuery(graphql`
      query VacanciesCount {
          allMarkdownRemark {
              totalCount
          }
      }`)

  const totalCount = data.allMarkdownRemark.totalCount;
  const path = window.location.pathname

  const scrollToTop = (e) => {
    let timeout = 0;
    if (path === '/') {
      e.preventDefault();
    } else {
      timeout = 100;
    }

    setTimeout(() => {
      scroller.scrollTo('positions', {
        duration: 800,
        delay: 100,
        smooth: true,
        offset: -50, 
      })
    }, timeout)
  };

  return (
    <footer className="Section Section--footer u-bg-jobs-bastille">
      <section className="Section Section--no-padding">
        <div className="Section-content">
          <div className="row">
            <div className="col-6 col-md-2">
              <div className="ContentGroup">
                <div className="Page-footerLink">
                  <a className="Page-footerLinkText  u-bold" href="https://anadea.info/about-us" target="_blank">Company</a>
                </div>
                <div className="Page-footerLink">
                  <a className="Page-footerLinkText  u-bold" href="https://anadea.info/services" target="_blank">Services</a>
                </div>
                <div className="Page-footerLink">
                  <a className="Page-footerLinkText  u-bold" href="https://anadea.info/projects" target="_blank">Projects</a>
                </div>
                <div className="Page-footerLink">
                  <a className="Page-footerLinkText  u-bold" href="https://anadea.info/solutions" target="_blank">Solutions</a>
                </div>
              </div>
            </div>
            <div className="col-6 col-md-2">
              <div className="ContentGroup">
                <div className="Page-footerLink">
                  <a className="Page-footerLinkText  u-bold" href="https://anadea.info/contacts"  target="_blank">Write for us</a>
                </div>
                <div className="Page-footerLink">
                  <a className="Page-footerLinkText  u-bold" href="https://anadea.info/blog"  target="_blank">Blog</a>
                </div>
                <div className="Page-footerLink">
                  <Link className="Page-footerLinkText u-bold" onClick={scrollToTop} to="/#positions">Careers
                    {totalCount ? ( <VacanciesCount
                    count={totalCount} location="footer"/>): ''}
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-3 col-lg-2">
              <div className="ContentGroup">
                <div className="Page-footerLink">
                  <a href="https://businessnameguide.com/" className="Page-footerLinkText u-bold"
                     target="_blank" rel="noopener noreferrer">Business name
                    generator</a>
                </div>
                <div className="Page-footerLink">
                  <a className="Page-footerLinkText u-bold" href="https://anadea.info/privacy-terms" target="_blank">Privacy &amp; Terms</a>
                </div>
              </div>
            </div>

            <div className="offset-md-1 offset-lg-2 col-md-4 col-sm-8 col-12 d-flex flex-column">
              <div className="row">
                <div className="col-8 d-flex justify-content-between">
                  <ul className="soc-list">
                    {socialLinks.map(link => {
                      return (
                        <li key={link.id}>
                          <a
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`Find us on ${link.name}`}
                          >
                            {link.icon}
                          </a>
                        </li>
                      )
                    })}
                  </ul>
                </div>
              </div>
              <div className="u-spacer-20"></div>
              <a href="/awards-achievements" className="award" aria-label="Awards &amp; Achievements">
                <img loading="lazy" className="u-svg-alto" alt="Awards-achievements"
                     title="Awards-achievements"
                     src="../images/footer/award.png"/>
              </a>

              <div className="u-spacer-20"></div>
              <div className="Typography Typography--body0 Typography--thin Typography--footer-alto u-mb-15">
                © 2000-2021 <span itemProp="brand">Anadea</span> Inc.<br/>
                All rights reserved
              </div>

            </div>
          </div>
        </div>
      </section>
    </footer>
  )
}

export default Footer
