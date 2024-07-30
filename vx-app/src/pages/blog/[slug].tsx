import { useRouter } from 'next/router';
import { PrismaClient } from '@prisma/client';
import type { InferGetServerSidePropsType, GetServerSideProps } from 'next';
import Layout from 'layout/main';
import HMeta from 'components/headmeta';
import styles from 'styles/posts.module.sass';
import Link from 'next/link';
export default function BlogSlug({rex}) {
	const router = useRouter();
    const blogpagepath = router.query.slug;
    return (
        <Layout>
			<HMeta pageTitle={rex.title} pageDescription='amamiya blog'/>
			<div className={styles.container}>
			   <h1>amamiya blog</h1>
				<h1>{rex.title}</h1>
	            <p>ID: {blogpagepath}</p>
				<p>writen by :{rex.writeusername}</p>
				<p>{rex.content}</p>
				<div className={styles.link}>
					<Link href="/blog">
						back /blog
					</Link>
				</div>
			</div>
        </Layout>
    )
}

export const getServerSideProps = (async (context) => {
	const prisma = new PrismaClient();
	const content = await prisma.post.findUnique({
		where: {
			id: String(context.query.slug)
		}
	})
	const users = await prisma.user.findUnique({
		where: {
			id: content?.authorId
		}
	})
	const rex= {
		title: content?.title,
		autuid: content?.authorId,
		writeusername: users?.name,
		content: content?.content,
	}
	return {props: {rex}}
}) satisfies GetServerSideProps<{rex}>
