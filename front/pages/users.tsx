export default function Users ({users}) {
    return (
        <>
            <h1>List of Users</h1>
            {users.map(el => {
                return (
                    <div key={el.id}>
                        <p>{el.name}</p>
                        <p>{el.email}</p>
                    </div>
                )
            })}
        </>
    )
}

export async function getStaticProps() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    return {
        props: {
            users: data
        }
    }
}