import Head from 'next/head'

interface MetaProps {
    pageTitle?: string
    pageDescription?: string
    pagePath?: string
    pageImg?: any
    pageImgWidth?: number
    pageImgHeight?: number
}

const HMeta: React.FC<MetaProps> = ({
                                        pageTitle,
                                        pageDescription,
                                        pagePath,
                                        pageImg,
                                        pageImgWidth,
                                        pageImgHeight,
                                    }) => {
    const defaultTitle = 'VARIUS'
    const defaultDescription = 'Web3 development'
    const defaultImg = '/favicon.ico'
    const title = pageTitle ? `${pageTitle} | ${defaultTitle}` : defaultTitle
    const description = pageDescription ? pageDescription : defaultDescription
    const url = pagePath
    const imgUrl = pageImg ? pageImg : defaultImg
    const imgWidth = pageImgWidth ? pageImgWidth : 1280
    const imgHeight = pageImgHeight ? pageImgHeight : 640
    //const imgx = require("/images/favicon.ico");
    return (
        <Head>
            <title>{title}</title>
            <meta name="description" content={description}/>
            <meta property="og:url" content={url}/>
            <meta property="og:title" content={title}/>
            <meta property="og:site_name" content={title}/>
            <meta property="og:description" content={description}/>
            <meta property="og:type" content="website"/>
            <meta property="og:image" content={`https://dev.varius.technology${pageImg}`}/>
            <meta property="og:image:width" content={String(imgWidth)}/>
            <meta property="og:image:height" content={String(imgHeight)}/>
            <meta name="twitter:image" content={`https://dev.varius.technology${pageImg}`}/>
            <meta name="twitter:card" content="summary_large_image"/>
            <meta name="twitter:site" content="@ama_dev_1"/>
            <link rel="icon" href={"https://dev.varius.technology/favicon.ico"} sizes="any"/>
            <link rel="canonical" href={url}/>
        </Head>
    )
}

export default HMeta;