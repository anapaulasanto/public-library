export function Container({ children }) {
    return (
        <div className="flex flex-col items-center w-full">
            {children}
        </div>
    )
}