import { useEffect, useRef, useState } from "react";
import dynamic from 'next/dynamic';
import { ReactJSX } from "@emotion/react/types/jsx-namespace";
const ProductBtnStyle = dynamic(() => import('./btn_main'), { ssr: false });

const MenuList = ({ children }: any) => {
    return (
        <div>
            {children}
        </div>
    );
}


const ProductMenu = () => {
    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !(menuRef.current as HTMLElement).contains(event.target)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div
            style={{
                position: 'relative',
                display: 'inline-block',
            }}
            ref={menuRef}>
            <button onClick={toggleDropdown} style={{
                padding: '10px 20px',
                background: 'none',
                border: '1px solid #333',
                borderRadius: '5px',
                cursor: 'pointer',
            }}>
                Product
            </button>
            <div
                style={{
                    display: isOpen ? 'block' : 'none',
                    position: 'absolute',
                    bottom: '100%',
                    right: 0,
                    background: '#000',
                    border: '1px solid #333',
                    borderRadius: '5px',
                    padding: '10px',
                    width: '200px',
                }}
            >
                <ul style={{
                    listStyle: 'none',
                    padding: 0,
                    margin: 0,
                }}>
                    <li>VX</li>
                    <li>GMAP</li>
                </ul>
            </div>
        </div>
    );
};

export default ProductMenu;