import React from "react"
import { graphql } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faMugHot } from "@fortawesome/free-solid-svg-icons"

import Layout from "../components/layout"

// import '../styles/index.css'

const Blog = ({ data }) => {
  return (
    <Layout>
      <article className="container blog-container">
        <section className="row align-items-stretch justify-content-start no-gutters">
        {data.allMarkdownRemark.edges.map( ({ node }) => {
          return <div className="col-lg-5 blog-post" key={node.id}>
            <img src={node.frontmatter.image} alt="blog hero"/>
            <div>
              <h4>{node.frontmatter.title}</h4>
              <span><FontAwesomeIcon icon={faMugHot}/> {node.timeToRead} min read</span>
              <p>{node.excerpt}</p>

              {node.frontmatter.tags.split(" ").map( (item, index) => <span className="tags" key={index}>#{item}</span>)}
            </div>
          </div>
        })}
        </section>
      </article>
    </Layout>
  )
}

export const query = graphql`
    query {
        allMarkdownRemark {
            edges {
                node {
                    id
                    excerpt(pruneLength: 70)
                    frontmatter {
                        title
                        image
                        description
                        tags
                    }
                    timeToRead
                }
            }
        }
    }
`

export default  Blog;