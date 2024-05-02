import React from 'react';
import { AiFillGithub } from "react-icons/ai";

const GitButton =  ({ children }: any)=> {
    const btnstyle = {
        backgroundColor: '#000',
        color: '#fff',
        padding: '10px 20px 10px 10px',
        border: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: '',
        cursor: 'pointer'
    }
    return (
        <button style={{
            ...btnstyle,
            borderRadius: '3px',
            width: '150px',
            height: '50px',
        }}>
            
            <p style={{
                ...btnstyle,
                borderRight: '1px solid white',
                paddingRight: '10px',
                marginRight: '14px',
            }}>
                OK
            </p>
            <p>
                {children}
            </p>
        </button>
    )
}

export default GitButton;