import React from 'react'

const Breadcrumbs = () => {
  return (
    <>
      <ol
        className="Navigation-breadcrumbs"
        aria-label="Breadcrumb"
        itemScope
        itemType="http://schema.org/BreadcrumbList"
      >
        <li
          className="Navigation-breadcrumbsItem Navigation-breadcrumbsItem--darkTheme "
          itemType="http://schema.org/ListItem"
          itemProp="itemListElement"
          itemID="https://anadea.info/"
          itemScope
        >
          <a
            className="Navigation-breadcrumbsLink"
            aria-label="Anadea - Home page"
            href="https://anadea.info/"
            itemProp="item"
          >
            <span className="Navigation-linkText" itemProp="name">
              Home page
            </span>
          </a>
          <meta itemProp="position" content="1" />
        </li>
      </ol>
    </>
  )
}

export default Breadcrumbs
