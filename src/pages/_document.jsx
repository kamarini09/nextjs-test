import { Html, Head, Main, NextScript } from 'next/document'

//this give us SEO so they can find the HTML in the browsers 
//because usually we get an empty file when we "view source"
export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
