import Document, { Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends Document {
  static getInitialProps ({ renderPage }) {
    const sheet = new ServerStyleSheet()
    const page = renderPage(App => props => sheet.collectStyles(<App {...props} />))
    const styleTags = sheet.getStyleElement()
    return { ...page, styleTags }
  }

  render() {
    return (
      <html lang="th">
        <Head>
          <title>SIT CRAFT Camp 2017 | Main</title>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
          <link rel="stylesheet" href="/static/css/bootstrap.min.css" async />
          <link rel="stylesheet" href="/static/css/fonts.css" async />
          <link rel="stylesheet" href="/static/font-awesome/css/font-awesome.min.css" async />

          <link href="https://fonts.googleapis.com/css?family=Prompt:300,400" rel="stylesheet" />

          {this.props.styleTags}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
