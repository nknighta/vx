import React from 'react'
import { AiFillGithub } from 'react-icons/ai'
import { getWindowWidth, getWindowHight } from '../scripts/getWidth'
import VLink from '../components/link'
import stylebase from '../styles/style.module.sass'
import { setCookie } from 'cookies-next'
const Layout = ({ children }: any) => {
  const width = getWindowWidth();
  const height = getWindowHight();
  const isMobile: boolean = width > 960 ? false : true;
  return (
    <>
      <div
        style={{
          padding: isMobile ? '0 1vh': '0 10vh',
          height: '100%',
        }}
      >
        {children}
      </div>
	  <div>{width}</div>
      <footer
        className={stylebase.fstyle}
        style={{
          top: height - 100,
        }}>
        <div
          className={stylebase.fstyle__inside}
          style={{
            display: 'flex',
            alignItems: 'center',
            padding: '3px 0',
          }}>
          <VLink page='/' linkevent={() => {
            setCookie('act', 'homebtn')
          }}>
            <p>Home</p>
          </VLink>
          <VLink page='/about'>
            <p>About</p>
          </VLink>
          <VLink page='/blog'>
            <p>Blog</p>
          </VLink>
          <VLink page='https://github.com/nknighta/vx' opentarget="_blank">
            <AiFillGithub />
          </VLink>
          © 2024 - nknighta
        </div>
      </footer>
    </>
  )
}

export default Layout
