import Link from "next/link"

export default function VLink({ page,children, opentarget , linkevent}: { page: string, children: any , opentarget?: string, linkevent?: any}) {
    return (
        <Link
            href={page}
            target={opentarget}
            onClick={linkevent}
            style={{
                textDecoration: 'none',
                color: '#fff',
                fontSize: '1rem',
                margin: '0 0.5rem'
            }}>
            {children}
        </Link>
    )
}