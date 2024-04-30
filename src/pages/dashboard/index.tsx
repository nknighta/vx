import HMeta from "components/headmeta";
import Layout from "layout/main";
import React from "react";
import {Box, Button,} from "@chakra-ui/react";
import type {
    GetServerSidePropsContext,
    InferGetServerSidePropsType,
} from "next"
import {getProviders, useSession, signIn, signOut} from "next-auth/react"
import SigninedComponents from "./signined-components";

export default function Dash({
                                 providers,
                             }: InferGetServerSidePropsType<typeof getServerSideProps>) {
    const {data: session} = useSession();
    if (session) {
        return (
            <Layout>
                <SigninedComponents />
            </Layout>
        )
    }
    return (
        <Layout>
            <Box display={["block", "block", "block", "flex"]} h={[1500, 500]}>
                <Box>
                    <>
                        {Object.values(providers).map((provider) => (
                            <div key={provider.name}>
                                <Button
                                    onClick={() => signIn()}
                                    bg={"#000"}
                                    color={"#fff"}
                                    w={150}>
                                    {provider.name}
                                </Button>
                            </div>
                        ))}
                    </>
                </Box>
            </Box>
        </Layout>
    )
}


export async function getServerSideProps(context: GetServerSidePropsContext) {

    const providers = await getProviders()

    return {
        props: {providers: providers ?? []},
    }
}
