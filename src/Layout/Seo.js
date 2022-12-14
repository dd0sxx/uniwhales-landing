import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"

function SEO({ description, meta, title, twitter_image }) {
  
  const metadescription = description || "Realtime whale data. 📈 Track large volume transactions and traders on Uniswap BEFORE everyone else knows what they are up to"
  // const metatwitterImage = twitter_image || "uniwhales-twitter.jpg"
  const full_title = title + " | UniWhales" 

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
          name: `twitter:site`,
          content: "@uniwhalesio",
        },
        {
          name: `twitter:image`,
          content: "https://pbs.twimg.com/profile_banners/3065800816/1605800908/1500x500",
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
  title: "UniWhales",
}

SEO.propTypes = {
  description: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
}

export default SEO
