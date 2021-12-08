import React from 'react'
import {socialLinks} from '../../constants/social-links'
import VacanciesCount from "../vacanciesCount/vacanciesCount";
import {graphql, useStaticQuery} from "gatsby";

const Footer = () => {
  const data = useStaticQuery(graphql`
      query VacanciesCount {
          allMarkdownRemark {
              totalCount
          }
      }`)
  const totalCount = data.allMarkdownRemark.totalCount;
  return (
    <footer className="Section Section--footer u-bg-jobs-bastille">
      <section className="Section Section--no-padding">
        <div className="Section-content">
          <div className="row">
            <div className="col-6 col-md-2">
              <div className="ContentGroup">
                <div className="Page-footerLink">
                  <a className="Page-footerLinkText  u-bold" href="https://adanea.info/about-us">Company</a>
                </div>
                <div className="Page-footerLink">
                  <a className="Page-footerLinkText  u-bold" href="https://anadea.info/services">Services</a>
                </div>
                <div className="Page-footerLink">
                  <a className="Page-footerLinkText  u-bold" href="https://anadea.info/projects">Projects</a>
                </div>
                <div className="Page-footerLink">
                  <a className="Page-footerLinkText  u-bold" href="https://anadea.info/solutions">Solutions</a>
                </div>
              </div>
              <div className="Page-footerLink Page-footerLocale">
                <a className="Page-footerLinkText" href="https://anadea.info/ru/">Russian version</a>
              </div>
            </div>
            <div className="col-6 col-md-2">
              <div className="ContentGroup">
                <div className="Page-footerLink">
                  <a className="Page-footerLinkText  u-bold" href="https://anadea.info">Write for us</a>
                </div>

                <div className="Page-footerLink">
                  <a className="Page-footerLinkText  u-bold" href="https://anadea.info/team">Team</a>
                </div>

                <div className="Page-footerLink">
                  <a className="Page-footerLinkText  u-bold" href="https://anadea.info/blog">Blog</a>
                </div>
                <div className="Page-footerLink">
                  <a className="Page-footerLinkText  u-bold" href="https://anadea.info/jobs">Careers
                    {totalCount ? ( <VacanciesCount
                    count={totalCount} location="footer"/>): ''}
                  </a>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-3 col-lg-2">
              <div className="ContentGroup">
                <div className="Page-footerLink">
                  <a href="/free-project-estimate" className="Page-footerLinkText  u-bold"><span
                    itemProp="name">App cost calculator Beta</span></a>
                </div>
                <div className="Page-footerLink">
                  <a href="https://businessnameguide.com/" className="Page-footerLinkText   u-bold"
                     target="_blank" rel="noopener noreferrer">Business name
                    generator</a>
                </div>
                <div className="Page-footerLink">
                  <a className="Page-footerLinkText   u-bold" href="/privacy-terms">Privacy &amp; Terms</a>
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
