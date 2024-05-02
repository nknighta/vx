import Layout from 'layout/main';
import fs from 'fs';
import matter from 'gray-matter';
import Link from "next/link";
import HMeta from 'components/headmeta';
import { getWindowWidth } from 'scripts/getWidth';
import Image from "next/image";

export default function Post({ posts }) {
  
  //sm: "30em",
  //md: "48em",
  //lg: "62em",
  //xl: "80em",
  const width = getWindowWidth();
  return (
    <div style={{
      margin: '0 auto',
      padding: '4.2vh 10px 7vh 40px',
      background: '#000000',
    }}>
      <HMeta pageTitle={"Blog and Release "} pageDescription={"official blog and other"} pageImg={'/api/og?title=Blog'} />
      <div>
        {posts.map((post) => (
            <div>
              <Link href={`/blog/${post.slug}`} key={post.slug}>
                <Image src={`https://media.varius.technology/api/og?title=${post.frontMatter.title}&description=${post.frontMatter.description}`}
                  width={400}
                  height={200}
                  alt={`${post.frontMatter.description}-preview.png`} />
                  <div>
                    <div>
                      Blog
                    </div>
                    <p>{post.frontMatter.title}</p>
                    <p>{post.frontMatter.description}</p>
                    <p>{post.frontMatter.date}</p>
                  </div>
              </Link>
            </div>
        ))}
      </div>
    </div>
  );
}

export const getStaticProps = () => {
  const files = fs.readdirSync('src/posts');
  const posts = files.map((fileName) => {
    const slug = fileName.replace(/\.md$/, '');
    const fileContent = fs.readFileSync(`src/posts/${fileName}`, 'utf-8');
    const { data } = matter(fileContent);
    return {
      frontMatter: data,
      slug,
    };
  });

  return {
    props: {
      posts,
    },
  };
};

Post.getLayout = (page) => {
  return (
    <Layout>
      {page}
    </Layout>
  );
}
