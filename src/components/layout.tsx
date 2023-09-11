import * as React from 'react'
import { Link } from 'gatsby'
import Header from './Layout/Header/header';
import Main from './TopPage/Main/main';
import Footer from './Layout/Footer/footer';

type LayoutProps = {
  pageTitle: string,
  children: React.ReactNode
}

const Layout = ({ pageTitle, children }: LayoutProps) => {
  return (
    <html className="">
      <head><title>{pageTitle}</title></head>
      <body className="">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}

export default Layout