"use client";

import Layout from "layout/main";
import { useEffect, useState } from "react";

export default function Test(dc) {
    const [data, setData] = useState();
    useEffect(() => {
        dc = document.cookie
        dc.split(';').map((item) => {
            if (item.includes('userid')) {
                dc = item.split('=')[1]
            }
        })
        setData(dc);
    }, []);
    return (
        <Layout>
            <h1>Test</h1>
            {data ? <p>{data}</p> : <p>not cookie</p>}
        </Layout>
    )
}