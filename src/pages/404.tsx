import HMeta from "components/headmeta";
import Layout from "layout/main";
import Link from "next/link";

export default function Custom404() {
    return (
        <Layout>
            <HMeta pageTitle="404 - Page Not Found" />
            <div className="px-20">
                <div className="flex justify-center items-center w-full h-auto py-60">
                    <h1 className="text-5xl">404</h1>
                </div>
                <hr />
                <div className="flex justify-center items-center w-full h-auto py-10">
                    <p>Page Not Found</p>
                </div>
                <Link href="/">
                    <p className="flex justify-center items-center w-full h-auto">Home</p>
                </Link>
            </div>
        </Layout>
    )
}