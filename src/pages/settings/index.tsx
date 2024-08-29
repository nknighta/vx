import Layout from "layout/main";
import { getServerSession } from "next-auth";
import { authOptions } from "pages/api/auth/[...nextauth]";

export default function SettingsPage() {
    return (
        <Layout>
            <p>Settings page</p>
        </Layout>
    )
}

export async function getServerSideProps(context) {
    const session = await getServerSession(context.req, context.res, authOptions)
  
    if (!session) {
      return {
        redirect: {
          destination: "/",
          permanent: false,
        },
      }
    }
  
    return {
      props: {
        session,
      },
    }
  }