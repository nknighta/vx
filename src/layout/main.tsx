import React from 'react'
import { getWindowWidth, getWindowHight } from '../scripts/getWidth';
import VLink from '../components/link';
import stylebase from '../styles/style.module.sass';
// disable ssr for styled-components hydration error
// https://zenn.dev/luvmini511/articles/71f65df05716ca

/**
 * width is debug 
 */
const Layout = ({ children, session }: any) => {
  const width = getWindowWidth();
  const height = getWindowHight();
  const isMobile: boolean = width > 960 ? false : true;
  return (
    <>
      <div
        style={{
          padding: isMobile ? '0 1vh' : '0 10vh',
          height: '100%',
        }}
      >
        {children}
      </div>
      <footer
        className={" w-full fixed h-33px items-center px-10px"}
        style={{
          top: height - 100,
        }}>
        <div
          className={"bg-purple-600 h-max w-max p-10px"}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'start',
            height: '100%',
            borderRadius: '10px',
          }}>
          <VLink page='/'>
            Home
          </VLink>
          <VLink page='/about'>
            About
          </VLink>
          <VLink page='/blog' >
            Blog
          </VLink>
          © 2024 - <VLink page='https://nknighta.github.io'>nknighta</VLink>
        </div>
      </footer>
    </>
  )
}

export default Layout
