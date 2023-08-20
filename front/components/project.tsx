export default function Project ({project, github, demo, stack, description}) {
    return (
        <>
            <p>{project}</p>
            <a href={github}>GitHub</a>
            <a href={demo}>Demo</a>
            <p>{stack}</p>
            <p>{description}</p>
        </>
    )
}