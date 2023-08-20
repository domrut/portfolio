export default function Experience ({company, endDate,job, responsibilities, startDate}) {
    return (
        <>
            <p>{company}</p>
            <p>{startDate}</p>
            <p>{endDate}</p>
            <p>{job}</p>
            <p>{responsibilities}</p>
        </>
    )
}