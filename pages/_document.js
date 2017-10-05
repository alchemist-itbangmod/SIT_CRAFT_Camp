import Document, { Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'
import seo from '../seo.json'

const config = {
  baseURL: 'https://craft.sitchallenge.com'
}

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
          <title>{seo.title}</title>

          <meta charSet="utf-8" />
          <meta name="description" content={seo.description} />
          <meta name="keywords" content={seo.keywords} />
          <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />

          <link rel="stylesheet" href="/static/css/bootstrap.min.css" async />
          <link rel="stylesheet" href="/static/css/fonts.css" async />
          <link rel="stylesheet" href="/static/font-awesome/css/font-awesome.min.css" async />

          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content="@SIT_KMUTT" />
          <meta name="twitter:title" content={seo.title} />
          <meta name="twitter:description" content={seo.description} />
          <meta name="twitter:image" content={`${config.baseURL}/static/images/social/banner.png`} />

          <meta property="og:title" content={seo.title} />
          <meta property="og:type" content="article" />
          <meta property="og:image" content={`${config.baseURL}/static/images/social/banner.png`} />
          <meta property="og:description" content={seo.description} />
          <meta property="og:site_name" content="SIT CRAFT Camp" />

          <link rel="apple-touch-icon" sizes="57x57" href="/static/images/favicon.ico/apple-icon-57x57.png" />
          <link rel="apple-touch-icon" sizes="60x60" href="/static/images/favicon.ico/apple-icon-60x60.png" />
          <link rel="apple-touch-icon" sizes="72x72" href="/static/images/favicon.ico/apple-icon-72x72.png" />
          <link rel="apple-touch-icon" sizes="76x76" href="/static/images/favicon.ico/apple-icon-76x76.png" />
          <link rel="apple-touch-icon" sizes="114x114" href="/static/images/favicon.ico/apple-icon-114x114.png" />
          <link rel="apple-touch-icon" sizes="120x120" href="/static/images/favicon.ico/apple-icon-120x120.png" />
          <link rel="apple-touch-icon" sizes="144x144" href="/static/images/favicon.ico/apple-icon-144x144.png" />
          <link rel="apple-touch-icon" sizes="152x152" href="/static/images/favicon.ico/apple-icon-152x152.png" />
          <link rel="apple-touch-icon" sizes="180x180" href="/static/images/favicon.ico/apple-icon-180x180.png" />
          <link rel="icon" type="image/png" sizes="192x192" href="/static/images/favicon.ico/android-icon-192x192.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/static/images/favicon.ico/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="96x96" href="/static/images/favicon.ico/favicon-96x96.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/static/images/favicon.ico/favicon-16x16.png" />
          <link rel="manifest" href="/static/images/favicon.ico/manifest.json" />
          <meta name="msapplication-TileColor" content="#336699" />
          <meta name="msapplication-TileImage" content="/static/images/favicon.ico/ms-icon-144x144.png" />
          <meta name="theme-color" content="#336699" />

          {this.props.styleTags}
        </Head>
        <body>
          <Main />
          <NextScript />

          {/* Google Analytics */}
          <script async src="https://www.googletagmanager.com/gtag/js?id=UA-82920412-4" />
          <script
            dangerouslySetInnerHTML={{
              __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', 'UA-82920412-4');
              `
            }}
          />
        </body>
      </html>
    )
  }
}
