export function Button({ text, ...props }) {
    return <button type="submit" class="bg-black text-white rounded-lg p-3 w-full mt-4 font-semibold hover:bg-slate-900 hover:cursor-pointer"{...props}>{text}</button>
}