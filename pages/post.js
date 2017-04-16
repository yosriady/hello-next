import Layout from '../components/MyLayout.js'

const Content = (props) => (
  <div>
    <h1>{props.url.query.title}</h1>
    <p>This is the blog post content.</p>
  </div>
)

export default (props) => (
    <Layout>
       <Content url={props.url} />
    </Layout>
)

// Here's what's happening in the above code.

// Every page will get a prop called “URL”
// which has some details related to the current URL.

// In this case, we are using the “query” object,
// which has the query string params.
// Therefore, we get the title with props.url.query.title.
