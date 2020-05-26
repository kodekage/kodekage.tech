import React from "react"
import { graphql } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faMugHot, faClock } from "@fortawesome/free-solid-svg-icons"


import Layout from "../components/layout"
import Footer from "../components/footer"

export default function BlogPost({ data }) {
  const post = data.markdownRemark
  return (
    <Layout>
      <div className="blog-article">
        <h1>{post.frontmatter.title}</h1>
        <span className="frontmatter"><FontAwesomeIcon icon={faClock}/> {post.frontmatter.date} | <FontAwesomeIcon icon={faMugHot}/> {post.timeToRead} min read</span>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />

        <div className="article-contact">
          <h5>If you found this article helpful, please reach out on twitter <a href="https://twitter.com/kodekage" target="_blank" rel="noopener noreferrer">@kodekage</a></h5>
        </div>
      </div>
      <Footer/>
    </Layout>
  )
}

export const query = graphql`
    query($slug: String!) {
        markdownRemark(fields: { slug: { eq: $slug } }) {
            html
            frontmatter {
                title
                date(formatString: "MMMM DD, YYYY")
            }
            timeToRead
        }
    }
`