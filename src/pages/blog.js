import React from "react"
import { graphql } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faMugHot, faClock } from "@fortawesome/free-solid-svg-icons"

import Layout from "../components/layout"
import Footer from "../components/footer"

// import '../styles/index.css'

const Blog = ({ data }) => {
  return (
    <Layout>
      <article className="container blog-container">
        <section className="row align-items-stretch justify-content-start no-gutters">
        {data.allMarkdownRemark.edges.map( ({ node }) => {
          return (
            <a href={`/blog${node.fields.slug}`} className="col-lg-5 blog-post" key={node.id}>
                <img src={node.frontmatter.image} alt="blog hero"/>
                <div>
                  <h4>{node.frontmatter.title}</h4>
                  <span className="frontmatter"><FontAwesomeIcon icon={faClock}/> {node.frontmatter.date} | <FontAwesomeIcon icon={faMugHot}/> {node.timeToRead} min read</span>
                  <p>{node.excerpt}</p>

                  {node.frontmatter.tags.split(" ").map( (item, index) => <span className="tags" key={index}>#{item}</span>)}
                </div>
            </a>
          )
        })}
        </section>
      </article>
      <Footer/>
    </Layout>
  )
}

export const query = graphql`
    query {
        allMarkdownRemark (sort: {fields: frontmatter___date, order: DESC}) {
            edges {
                node {
                    id
                    excerpt(pruneLength: 70)
                    frontmatter {
                        title
                        image
                        description
                        tags
                        date(formatString: "MMMM DD, YYYY")
                    }
                    timeToRead,
                    fields {
                        slug
                    }
                }
            }
        }
    }
`

export default  Blog;