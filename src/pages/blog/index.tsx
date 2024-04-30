import Layout from 'layout/main';
import fs from 'fs';
import matter from 'gray-matter';
import Link from "next/link";
import HMeta from 'components/headmeta';
import { Text, Box, Badge, Image, SimpleGrid } from '@chakra-ui/react';
import { getWindowWidth } from 'scripts/getWidth';

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
      <SimpleGrid columns={[3, null, 0]} minChildWidth='350px' spacing='10px'>
        {posts.map((post) => (
            <Box
              maxW={380}
              bg={"brand.300"}
              borderRadius={"lg"}
              overflow={"hidden"}
              m={2}>
              <Link href={`/blog/${post.slug}`} key={post.slug}>
                <Image src={`https://media.varius.technology/api/og?title=${post.frontMatter.title}&description=${post.frontMatter.description}`}
                  width={"100%"}
                  height={200}
                  alt={`${post.frontMatter.description}-preview.png`} />
                <Box p={1}>
                  <Box>
                    <Badge borderRadius='full' px='2' colorScheme='teal'>
                      Blog
                    </Badge>
                    <Text m={1}>{post.frontMatter.title}</Text>
                    <Text m={1}>{post.frontMatter.description}</Text>
                    <Text m={1}>{post.frontMatter.date}</Text>
                  </Box>
                </Box>
              </Link>
            </Box>
        ))}
      </SimpleGrid>
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
