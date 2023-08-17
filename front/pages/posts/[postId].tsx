import Image from 'next/image'
import Link from "next/link";
import Head from "next/head";
import {useRouter} from "next/router";

export default function PostId() {
    const router = useRouter();
    const postID = router.query.postId;
    return (
        <>
            <Head>
                <title>{postID} post</title>
            </Head>
            <h1 className="text-green-900 font-bold">{postID} Post</h1>
            <Image src="/images/profile.jpg" alt="Your picture" height={244} width={244}/>
            <Link href="/">Go back</Link>
        </>
    );
}