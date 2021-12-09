import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import {GatsbyImage, getImage} from "gatsby-plugin-image";

const ImageProvider = ({ fileName, alt, style }) => {
  const { allFile } = useStaticQuery(graphql`
    query {
        allFile(filter: {sourceInstanceName: {eq: "images"}}) {
          nodes {
            name
            childImageSharp {
              gatsbyImageData(quality: 95, formats: [PNG, WEBP], placeholder: BLURRED)
            }
            ext
            sourceInstanceName
          }
        }
    }
  `)


  const fluid = allFile.nodes.find(elem => {
    const name = elem.name + elem.ext;
    if (name === fileName && elem.childImageSharp) {
      return elem;
    }
  })

  const img = getImage(fluid)

  return (
    <figure>
      <GatsbyImage alt={alt} image={img} style={style}/>
    </figure>
  )
}

export default ImageProvider
