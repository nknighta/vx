import HMeta from '../../components/headmeta'
import { PrismaClient } from '@prisma/client'
import Layout from 'layout/main'
import {BlogStyle} from 'components/styles';
import Image from "next/image";

export default function Blog({ posts }) {
    return (
        <Layout>
            <HMeta pageTitle="Blog" pageDescription="Blog" pagePath="/blog" />
            <div className='text-2xl py-10'>
                <h1>blog</h1>
            </div>
            <ul>
                {posts.map((post) => (
                    <li key={post.id} className='list-none max-w-500px py-3'>
                        <a href={`/blog/${post.id}`} className='py-10'>
                            <Image src={`/api/og?title=${post.title}&description=varius blog`} width={1280} height={640} alt='thubnail image' quality={60}/>
                            <h2>{post.title}</h2>
                            <p>{post.content}...</p>
                            <p>{post.authorId}</p>
                        </a>
                    </li >
                ))}
            </ul>
        </Layout>
    )
}
export const getServerSideProps = async () => {
    const prisma = new PrismaClient()
    const feed = await prisma.post.findMany({})
    const rex = feed.map((post) => ({
        id: post.id,
        title: post.title,
        content: post.content.slice(0, 18),
        authorId: post.authorId,
    }))
    return {
        props: {
            posts: rex,
        }
    }
}