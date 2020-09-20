const GlobalStyle = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
    font: 18px/1.5 "IBM Plex Sans", -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif;
    color: ${theme.colors.base};
    width: 100%;
  }

  * {
  box-sizing: border-box;
  }
`

const Container = styled(Page)({})

const Layout = ({ children }) => (
  <ThemeProvider>
    <StaticQuery
      query={graphql`
        query SiteTitleQuery {
          site {
            siteMetadata {
              title
              author
              authorUrl
            }
          }
        }
      `}
      render={data => (
        <>
          <GlobalStyle />
          <Container>
            <Header siteTitle={data.site.siteMetadata.title} />
            <main>{children}</main>
            <Page.Footer>
              <ContactUs />
              <SubscribeForm />
              <Footer siteMetadata={data.site.siteMetadata} />
            </Page.Footer>
          </Container>
        </>
      )}
    />
  </ThemeProvider>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout