import Head from 'next/head'
import React, { FC } from 'react'
import { Navbar } from '../ui';
import Sidemenu from '../ui/Sidemenu';
interface Props {
    title: string;
    pageDescription: string;
    imageFullUrl?: string;
    children?: React.ReactNode
}
export const ShopLayout: FC<Props> = ({ children, title, pageDescription, imageFullUrl }) => {
    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name='description' content={pageDescription} />
                <meta name='og:title' content={title} />
                <meta name='og:description' content={pageDescription} />
                {
                    imageFullUrl && (<meta name='og:image' content={imageFullUrl} />)
                }
            </Head>
            <nav>
                <Navbar />
            </nav>
            <Sidemenu/>          
            <main style={{
                margin: '80px auto',
                maxWidth: '1440px',
                padding: '0px 30px'
            }}>
                {children}
            </main>
            {/* Footer */}
            <footer>
                {/* TODO:Custom Footer */}
            </footer>
        </>
    )
}