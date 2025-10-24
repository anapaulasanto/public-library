import favicon from '../../../../assets/favicon.png'

export const FormHeader = ({ title, subtitle, classname }) => {
    return (
        <header className="flex flex-col items-center pt-3">
            <img src={favicon} alt="Logo da biblioteca" />
            <h1 className="text-2xl text-gradient font-semibold pb-3">{title}</h1>
            <p className={`text-gray-500 text-base text-center ${classname}`}>{subtitle}</p>
        </header>
    )
}