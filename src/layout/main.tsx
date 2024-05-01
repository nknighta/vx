import React from 'react';
import Link from "next/link";
import { AiFillGithub } from "react-icons/ai";
import { getWindowWidth } from '../scripts/getWidth';

const Layout = ({ children }: any) => {
    const width = getWindowWidth();

    const isMobile: boolean = width > 960 ? false : true;
    const isComlumn: boolean = width > 960 ? true : false;

    return (
        <>
            {process.env.NODE_ENV == "development" ? (
                <>
                    debug mode
                    <div>
                        meta data
                        {width}
                    </div>
                </>
            ) : ("")}
            <div style={{
                padding: isMobile ? '0 3vh' : '0 10vh',
            }}>
                {children}
            </div>
            <footer
                style={{
                    margin: '0 auto',
                    padding: '8.2vh 30px 10vh 30px',
                    background: '#000000',
                }}>
                
            </footer>
        </>
    );
};

export default Layout;
