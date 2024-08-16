import HMeta from '../../components/headmeta'
import { PrismaClient } from '@prisma/client'
import Layout from 'layout/main'
import {BlogStyle} from 'components/styles';

export default function Blog({ posts }) {
    return (
        <Layout>
            <HMeta pageTitle="Blog" pageDescription="Blog" pagePath="/blog" />
            <h1>blog</h1>
            <ul>
                {posts.map((post) => (
                    <BlogStyle key={post.id}>
                        <a href={`/blog/${post.id}`}>
                            <h2>{post.title}</h2>
                            <p>{post.content}...</p>
                            <p>{post.authorId}</p>
                        </a>
                    </BlogStyle>
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