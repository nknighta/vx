import React from 'react'
import { getWindowWidth, getWindowHight } from '../scripts/getWidth';
import VLink from '../components/link';
import AccuntBotton from "components/accountbtn";
import { useState } from 'react';
// disable ssr for styled-components hydration error
// https://zenn.dev/luvmini511/articles/71f65df05716ca

/**
 * width is debug 
 */

function MenuTitle({ options, children }: { options?: any[], children: any }) {
  return (
    <h2 className='py-1 text-xl'>
      {children}
    </h2>
  )
}
const Layout = ({ children }: any) => {
  const width = getWindowWidth();
  const height = getWindowHight();
  const isMobile: boolean = width > 960 ? false : true;
  const [menuopen, isMenuopen] = useState<boolean>(false);
  return (
    <>
      <div
        style={{
          padding: isMobile ? '0 1vh' : '0 7vh',
          height: '100%',
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
              <div className='fixed bottom-22 h-20 px-2 h-auto'>
                <div>
                  <MenuTitle>Account</MenuTitle>
                  <p>settings</p>
                  <MenuTitle>Apps</MenuTitle>
                  <button
                    className='bg-blue-900 p-2 rounded-lg'
                    onClick={() => {
                      isMenuopen(false)
                    }}>
                    Close
                  </button>
                </div>
              </div>
              : ""}
          </div>
          <VLink page='/'>
            Home
          </VLink>
        </div>
      </footer>
    </>
  )
}

export default Layout
