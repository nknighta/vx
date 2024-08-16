
const BlogStyle = ({children}) => {
    return (
        <li style={{
            listStyleType: 'none',
            maxWidth: '500px',
            overflow: 'hidden',
        }}>
            {children}
        </li>
    )
}
export {BlogStyle}