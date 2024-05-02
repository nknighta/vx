import React from 'react';

const WalletButton =  ({ children }: any)=> {
    const btnstyle = {
        backgroundColor: '#3211ab',
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

export default WalletButton;