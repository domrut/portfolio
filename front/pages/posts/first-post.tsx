import Image from 'next/image'
import Link from "next/link";
import Head from "next/head";
import Layout from "../../components/layout";

export default function FirstPost() {
    return (
        <Layout>
            <Head>
                <title>First post</title>
            </Head>
            <h1 className="text-green-900 font-bold">First Post</h1>
            <Image src="/images/profile.jpg" alt="Your picture" height={244} width={244}/>
            <Link href="/">Go back</Link>
        </Layout>
    );
}