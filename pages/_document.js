import React from 'react'
import Document, { Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    const { html, head, errorHtml, chunks } = renderPage()
    return { html, head, errorHtml, chunks }
  }

  render() {
    const sheet = new ServerStyleSheet()
    const main = sheet.collectStyles(<Main />)
    const styleTags = sheet.getStyleElement()

    return (
      <html lang="th">
        <Head>
          <title>SIT CRAFT Camp 2017 | Main</title>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
          <link rel="stylesheet" href="/static/css/bootstrap.min.css" />
          <link rel="stylesheet" href="/static/css/fonts.css" />

          <link href="https://fonts.googleapis.com/css?family=Prompt:300,400" rel="stylesheet" />

          {styleTags}
        </Head>
        <body>
          {main}

          <NextScript />
        </body>
      </html>
    )
  }
}
