export function Toast({ message }) {
    return (
        <div className="toast">
            <div className="alert alert-info bg-gradient text-white">
                <span>{message}</span>
            </div>
        </div>
    )
}