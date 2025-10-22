export const Button = ({ text, ...props }) => {
    return <button type="submit" className="bg-gradient text-white rounded-lg p-3 w-full mt-4 font-semibold hover:text-black hover:cursor-pointer"{...props}>{text}</button>
}