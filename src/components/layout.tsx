import * as React from 'react'
import { Link } from 'gatsby'
import Header from './Header/header';
import Main from './Main/main';
import Footer from './Footer/footer';


const Layout = ({ pageTitle, children }) => {
  return (
    <html className="">
      <body className="">
        <Header />
        <Main />
        <Footer />
      </body>
    </html>
  )
}

export default Layout