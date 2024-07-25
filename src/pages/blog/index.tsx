import { useEffect, useState } from 'react'
import HMeta from '../../components/headmeta'
import { PrismaClient } from '@prisma/client'
import Layout from 'layout/main'
export default function Blog({ posts }) {
    return (
        <Layout>
            <HMeta pageTitle="Blog" pageDescription="Blog" pagePath="/blog" />
            <h1>blog</h1>
            <ul>
                {posts.map((post) => (
                    <li key={post.id}>
                        <a href={`/blog/${post.id}`}>
                            <h2>{post.title}</h2>
                            <p>{post.content}</p>
                            <p>{post.authorId}</p>
                        </a>
                    </li>
                ))}
            </ul>
        </Layout>
    )
}
export const getServerSideProps = async () => {
    const prisma = new PrismaClient()
    const feed = await prisma.post.findMany({

    })
    const rex = feed.map((post) => ({
        id: post.id,
        title: post.title,
        content: post.content,
        authorId: post.authorId,
    }))
    console.log(rex)
    return {
        props: {
            posts: rex,
        }
    }
}