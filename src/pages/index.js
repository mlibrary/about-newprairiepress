import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import {graphql, Link} from "gatsby"

import BookList from "../components/books/bookList"
import JournalList from "../components/journals/journalList"
import Tagline from "../components/tagline"

export const IndexQuery = graphql`
query {
  home: markdownRemark(frontmatter: { templateKey: { eq: "home-page" } }) {
    frontmatter {
      taglineSection {
        text
        buttonLabel
        buttonUrl
      }
    }
  }
  books: allMarkdownRemark (
    filter: {
      frontmatter: { templateKey: { eq: "book" } }
    },
    sort: {
      fields: frontmatter___orderOnPage,
      order: ASC
    }
  ) {
    edges {
      node {
        fields {
          cover
        }
        id
        frontmatter {
          title
          author
          description
          readLink
          orderOnPage
        }
      }
    }
  }
  journals: allMarkdownRemark (
    filter: {
      frontmatter: { templateKey: { eq: "journal" } }
    },
    sort: {
      fields: frontmatter___orderOnPage,
      order: ASC
    }
  ) {
    edges {
      node {
        fields {
          cover
        }
        id
        frontmatter {
          title
          author
          description
          readLink
          orderOnPage
        }
      }
    }
  }
}
`

const IndexPage = ({data}) => {
  const tagline = data.home.frontmatter.taglineSection
  const books = data.books.edges
  const journals = data.journals.edges

  return (
    <Layout>
      <SEO title="Home" />      
      <section className="books-container container">
          <BookList books={books} />
          <div className="row mt-4">
            <div className="col-md-12">
              <p className="text-right">
                <a href="https://fulcrum.org/newprairiepress">Browse our books</a>
              </p>
            </div>
          </div>
        </section>
        <section className="books-container container">
          <JournalList journals={journals} />
          <div className="row mt-4">
            <div className="col-md-12">
              <p className="text-right">
                <a href="/journals">Browse our journals</a>
              </p>
            </div>
          </div>
        </section>
        <section className="tagline-container">
          <div className="container">
            <div className="row">
              <div className="tagline col-md-12">                
                <Tagline text={tagline.text} />
              </div>
            </div>
            <div className="row mt-4">
              <div className="cta-tagline col-md-6 text-center">
                <a className="btn btn-lg btn-primary" href={tagline.buttonUrl}>{tagline.buttonLabel}</a>
              </div>
              <div className="cta-tagline col-md-6 text-center">
                <a className="btn btn-lg btn-primary" href="/publish-with-us">Publish With Us</a>
              </div>
            </div>
          </div>
        </section>
    </Layout>
  )
}

export default IndexPage