import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"

function SEO({ description, meta, title, twitter_image }) {
  
  const metadescription = description || "View realtime Uniswap transactions over $10,000 in a easy to use, customizable dashboard"
  const metatwitterImage = twitter_image || "images/uniwhales-twitter.jpg"
  const full_title = title + " | Explore Uniswap Whales" 

  return (
    <Helmet
      title={full_title}
      meta={[
        {
          name: `description`,
          content: metadescription,
        },
        {
          property: `og:title`,
          content: full_title,
        },
        {
          property: `og:description`,
          content: metadescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: "summary_large_image",
        },
        {
          name: `twitter:creator`,
          content: "Uniwhales.io",
        },
        {
          name: `twitter:title`,
          content: full_title,
        },
        {
          name: `twitter:image`,
          content: "https://www.uniwhales.io/" + metatwitterImage,
        },
        {
          name: `twitter:description`,
          content: metadescription,
        },
      ].concat(meta)}
    >
    </Helmet>
  )
}

SEO.defaultProps = {
  meta: [],
}

SEO.propTypes = {
  description: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
}

export default SEO
