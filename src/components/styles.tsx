
const BlogStyle = ({children}) => {
    return (
        <li style={{
            listStyleType: 'none',
            maxWidth: '500px',
            overflow: 'hidden',
            padding: "20px 0"
        }}>
            {children}
        </li>
    )
}
export {BlogStyle}