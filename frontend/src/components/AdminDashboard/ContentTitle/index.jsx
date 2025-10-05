export function ContentTitle({ h1, p }) {
    return (
        <div>
            <h1 className="font-bold text-3xl">{h1}</h1>
            <p className="text-sm text-gray-500">{p}</p>
        </div>
    )
}