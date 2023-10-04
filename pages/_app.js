import '../styles/globals.css';
import '../styles/navbar.module.css'; // Import the CSS file here
import '../styles/stylecss.module.css'; // Import the CSS file here
import 'sweetalert2/src/sweetalert2.scss';
import Head from 'next/head';
import { PostProvider } from '../contexts/usersContext';
import Navbar from '../component/navbar/navbar';
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Head>
                <link rel="shortcut icon" href="/favicon.jpg" />
                <title>แบบทดสอบ</title>

                <link href="https://fonts.googleapis.com/css?family=Kanit" rel="stylesheet" />
            </Head>
            <PostProvider>
                <Navbar />
                <Component {...pageProps} />
            </PostProvider>
        </>
    );
}

export default MyApp;
