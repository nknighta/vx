import HMeta from 'components/headmeta';
import fs from 'fs';
import matter from 'gray-matter';
import Layout from '../../layout/main';
import { bascicdocspath} from 'scripts/basic';
import Markdown from 'react-markdown'
import Link from "next/link";

export async function getStaticProps({ params }) {
    const file = fs.readFileSync(`${bascicdocspath}/${params.slug}.md`, 'utf-8');
    const { data, content } = matter(file);
    return { props: { frontMatter: data, content } };
}
export function getStaticPaths() {
    const files = fs.readdirSync(`${bascicdocspath}/`);
    const paths = files.map((fileName) => ({
        params: {
            slug: fileName.replace(/\.md$/, ''),
        },
    }));
    return {
        paths,
        fallback: false,
    };
};

const Post = ({ frontMatter, content }) => {
    return (
        <div style={{
            maxWidth: "1000px",
            margin: "0 auto",
            padding: "0 40px"
        }}>
            <HMeta pageTitle={frontMatter.title + " - documentation"} 
            pageDescription={frontMatter.description} pageImg={`/api/og?title=${frontMatter.description}&description=${frontMatter.description}`} />
            <p>{frontMatter.title}</p>
            <p >{frontMatter.date} -- written by {frontMatter.writer}</p>
            <div>
                <Markdown>
                    {content}
                </Markdown>
            </div>
            <Link href={'/blog'} style={{
                padding: '4px 0',
                textDecoration: 'underline',
            }}>
                ↩ back to prev
            </Link>
        </div>
    );
};


Post.getLayout = (page) => {
    return (
        <Layout>
            {page}
        </Layout>
    );
}


export default Post;
