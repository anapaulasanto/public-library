import { Fieldset } from "../../CardLogin/Fieldset";
import { CiUser } from "react-icons/ci";
import { CiMail } from "react-icons/ci";
import { RiLockPasswordLine } from "react-icons/ri";
import { FaRegEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { userRegisterSchema } from "../../../../data/schemaForms";
import { useState } from "react";

export const FormSignUp = ({ formSubmit, error }) => {
    const { register, handleSubmit, formState: { isSubmitting, errors } } = useForm({ resolver: zodResolver(userRegisterSchema) });
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    return (
        <>
            <form className="w-full " onSubmit={handleSubmit(formSubmit)}>
                <Fieldset
                    htmlFor="nome" label="Nome completo"
                    placeholder="Seu nome completo"
                    type="text"
                    props={{ ...register("name", { required: true }) }}>
                    <CiUser className="absolute left-2 top-4" />
                </Fieldset>
                <p className="text-red-600 text-sm">{errors.name?.message}</p>

                <Fieldset
                    htmlFor="email"
                    label="Email"
                    placeholder="seu@email.com"
                    type="email"
                    props={{ ...register("email", { required: true }) }}>
                    <CiMail className="absolute left-2 top-4" />
                </Fieldset>
                <p className="text-red-600 text-sm">{errors.email?.message}</p>

                <Fieldset htmlFor="password"
                    label="Senha"
                    placeholder="••••••••"
                    type={isPasswordVisible ? "text" : "password"}
                    props={{ ...register("password", { required: true }) }}>
                    <RiLockPasswordLine className="absolute left-2 top-4" />
                    <button
                        type="button"
                        className="absolute right-5 top-4 text-gray-500">
                        {isPasswordVisible ? (
                            <FaRegEye className="text-gray-400" onClick={() => setIsPasswordVisible(false)} />
                        ) : (
                            <FaEyeSlash className="text-gray-400" onClick={() => setIsPasswordVisible(true)} />
                        )}
                    </button>
                </Fieldset>
                <p className="text-red-600 text-sm">{errors.password?.message}</p>

                <Fieldset htmlFor="confirmPassword"
                    label="Confirme sua senha"
                    placeholder="••••••••"
                    type={isPasswordVisible ? "text" : "password"}
                    props={{ ...register("confirmPassword", { required: true }) }}>
                    <RiLockPasswordLine className="absolute left-2 top-4" />
                    <button
                        type="button"
                        className="absolute right-5 top-4 text-gray-500">
                        {isPasswordVisible ? (
                            <FaRegEye className="text-gray-400" onClick={() => setIsPasswordVisible(false)} />
                        ) : (
                            <FaEyeSlash className="text-gray-400" onClick={() => setIsPasswordVisible(true)} />
                        )}
                    </button>
                </Fieldset>
                <p className="text-red-600 text-sm">{errors.confirmPassword?.message}</p>
                {error && <p className="text-red-600 text-center pt-1 text-sm">{error}</p>}

                <button type="submit" className="bg-gradient text-white rounded-lg p-3 w-full mt-4 font-semibold hover:text-black hover:cursor-pointer" disabled={isSubmitting}>
                    {isSubmitting ? (<span className="loading loading-spinner loading-lg"></span>) : "Cadastrar"}
                </button>
            </form>
        </>
    )
};