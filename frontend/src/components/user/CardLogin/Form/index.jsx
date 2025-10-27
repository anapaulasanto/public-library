import { Fieldset } from "../Fieldset";
import { RiLockPasswordLine } from "react-icons/ri";
import { CiMail } from "react-icons/ci";
import { FaRegEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { userLoginSchema } from "../../../../data/schemaForms";

export const FormLogin = ({ formSubmit, error, isLoading }) => {
    const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm({ resolver: zodResolver(userLoginSchema) });
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    return (
        <>
            <form className="w-full mt-4 space-y-2" onSubmit={handleSubmit(formSubmit)}>
                <Fieldset
                    htmlFor="email"
                    label="Email"
                    placeholder="seu@email.com"
                    type="email"
                    props={{ ...register("email", { required: true }) }}
                >
                    <CiMail className="absolute left-2 top-4" />
                </Fieldset>
                <p className="text-red-600 text-sm">{errors.email?.message}</p>

                <Fieldset
                    htmlFor="password"
                    label="Senha"
                    placeholder="••••••••"
                    type={isPasswordVisible ? "text" : "password"}
                    props={{ ...register("password", { required: true }) }}
                >
                    <RiLockPasswordLine className="absolute left-2 top-4" />
                    <button
                        type="button"
                        className="absolute right-4 top-4"
                        text={isLoading ? "Entrando..." : "Entrar"}
                        disabled={isLoading}
                    >
                        {isPasswordVisible ? (
                            <FaRegEye className="text-gray-400" onClick={() => setIsPasswordVisible(false)} />
                        ) : (
                            <FaEyeSlash className="text-gray-400" onClick={() => setIsPasswordVisible(true)} />
                        )}
                    </button>
                </Fieldset>
                <p className="text-red-600 text-sm">{errors.password?.message}</p>
                {error && <p className="text-red-600 text-center pt-1 text-sm">{error}</p>}

                <button type="submit" className="bg-gradient text-white rounded-lg p-3 w-full mt-4 font-semibold hover:text-black hover:cursor-pointer" disabled={isSubmitting}>
                    {isSubmitting ? (<span className="loading loading-spinner loading-lg"></span>) : "Entrar"}
                </button>
            </form>
        </>
    )
};
