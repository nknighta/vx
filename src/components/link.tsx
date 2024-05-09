import Link from "next/link"

export default function VLink({ page, text }: { page: string, text: string }) {
    return (
        <Link
            href={page}
            style={{
                textDecoration : 'none',
                color : '#fff',
                fontSize : '1rem',
                margin : '0 0.5rem'
            }}>
             {text}
        </Link>
    )
}