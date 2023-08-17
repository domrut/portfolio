import Link from "next/link";

export default function Posts () {

    const posts = () => {
        const items = [];
        for (let i = 1; i < 10; i++) {
            items.push(i);
        }
        return items;
    }

    return (
        <div>
            <p>Here you should see the main Posts page</p>
            <div>
                {posts().map((el:number) => {
                    return <Link key={el} href={`/posts/${el}`}>Link to post {el}</Link>
                })}
            </div>
        </div>
    )
}