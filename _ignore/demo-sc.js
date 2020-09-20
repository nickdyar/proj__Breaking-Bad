import React from 'react';
import { Link, graphql } from 'gatsby';
import Helmet from 'react-helmet';

import Layout from '../components/layout';

class SCDemoPage extends React.Component {
  render() {
    const siteData = this.props.data.site.siteMetadata;
    const siteTitle = siteData.title;
    const siteDescription = siteData.description;

    return (
      <Layout location={this.props.location}>
        <Helmet
          htmlAttributes={{ lang: 'en' }}
          meta={[{
            name: 'description',
            content: siteDescription
          }]}
          title={siteTitle}
        />

        <section>
          <h2>Styled Components Demo</h2>

          <div>
            <h3>Banana Milkshakes</h3>
            <p>We'll definitely need frozen bananas
            and some milk.</p>

            <Link to='/'>To Homepage</Link>
          </div>
        </section>
      </Layout>
    )
  }
};

export default SCDemoPage;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`;