import React from 'react'
import Link from 'next/link'
import { AiFillGithub } from 'react-icons/ai'
import { getWindowWidth, getWindowHight } from '../scripts/getWidth'
import VLink from 'components/link'
import stylebase from '../styles/style.module.sass'
const Layout = ({ children }: any) => {
  const width = getWindowWidth();
  const height = getWindowHight();
  const isMobile: boolean = width > 960 ? false : true

  return (
    <>
      <header
        style={{
          margin: '0 auto',
          background: '#000000',
        }}
      >
      </header>
      {process.env.NODE_ENV == 'development' ? (
        <div style={{
          width: '500px',
          color: 'white',
          position: 'fixed',
          zIndex: 999,
        }}>
          debug mode
          <div>
            meta data
            {width}
          </div>
        </div>
      ) : (
        ''
      )}
      <div
        style={{
          padding: isMobile ? '0 3vh' : '0 10vh',
          height: '100vh',
        }}
      >
        {children}
      </div>
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
          <VLink page='/' text='Home' />
              <VLink page='/dashboard' text='dashboard' />
              <VLink page='/dashboard/project' text='Project' />
            <VLink page='/account/signin' text='Signin' />
          <AiFillGithub />
          © 2024 - nknighta
        </div>
      </footer>
    </>
  )
}

// https://github.com/login/oauth/authorize?scope=user,repo&client_id=Iv1.f70fe782834c0370&redirect_uri=http://varius.technology:3003/dashboard`
export default Layout
