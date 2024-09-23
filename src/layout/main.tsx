import React, { useEffect } from 'react'
import { getWindowWidth, getWindowHight } from '../scripts/getWidth';
import VLink from '../components/link';
import { useState } from 'react';
import Link from 'next/link';
import { getCookie } from 'cookies-next';
// disable ssr for styled-components hydration error
// https://zenn.dev/luvmini511/articles/71f65df05716ca

function MenuTitle({ options, children }: { options?: any[], children: any }) {
  return (
    <h2 className='py-1 text-xl'>
      {children}
    </h2>
  )
}

function Menu({ children }: { children: any }) {
  return (
    <div className={`fixed bottom-22 h-20 px-4 h-auto bg-blue-900 py-2 px-2 rounded-md text-white`}>
      <div className=' bg-purple-600 p-1 rounded-md'>
        {children}
      </div>
    </div>
  )
}

function MenuLink({ text, href }: { text: string, href: string }) {
  return (
    <Link href={href}>
      <p>{text}</p>
    </Link>
  )
}

const Layout = ({ children }: any) => {
  const width = getWindowWidth();
  const height = getWindowHight();
  const isMobile: boolean = width > 960 ? false : true;
  const [menuopen, isMenuopen] = useState<boolean>(false);
  const [userdata, setUserData] = useState<any>({});

  useEffect(() => {
    const auth = getCookie('username');
    if (auth) {
      setUserData({ username: auth });
    }
  }, [])
  return (
    <>
      <div
        className='w-full bg-black text-white'
        style={{
          padding: isMobile ? '0 1vh' : '0 7vh',
          height: '100vh',
          color: 'white',
        }}
      >
        {children}
      </div>
      <footer
        className={"w-full fixed h-33px items-center"}
        style={{
          top: height - 35,
        }}>
        <div
          className={"bg-purple-600 h-max p-5px"}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'start',
          }}>
          <div className='px-3'>
            <button
              className='bg-black'
              onClick={() => {
                menuopen ? isMenuopen(false) : isMenuopen(true)
              }}>
              Menu {menuopen}
            </button>
            {menuopen ?
              <Menu>
                <MenuTitle>Account</MenuTitle>
                <MenuLink href='/dashboard' text='Dashboard' />
                <MenuLink href='/signin' text='SignIn' />

                <MenuTitle>Apps</MenuTitle>
                <MenuLink href='/apps' text='Apps' />

                <button
                  className='bg-blue-900 p-1 rounded'
                  onClick={() => {
                    isMenuopen(false)
                  }}>
                  Close
                </button>
              </Menu>
              : ""}
          </div>
          <VLink page='/'>
            Home
          </VLink>
          {userdata && userdata.username ?
            <VLink page='/dashboard'>
              Dashboard
            </VLink>
            : 
            <VLink page='/signin'>
              SignIn
            </VLink>}
        </div>
      </footer>
    </>
  )
}

export default Layout
