import { Fieldset } from "../../CardLogin/Fieldset";
import { CiUser } from "react-icons/ci";
import { CiMail } from "react-icons/ci";
import { RiLockPasswordLine } from "react-icons/ri";
import { FaRegEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { CiPhone } from "react-icons/ci";
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { userRegisterSchema } from "../../../data/schema";
import { useHookFormMask } from 'use-mask-input';
import { useState } from "react";

export function FormSignUp() {
    const { register, handleSubmit, formState: { isSubmitting, errors } } = useForm({ resolver: zodResolver(userRegisterSchema) });
    const registerWithMask = useHookFormMask(register);
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    function formSubmit(data) {
        console.log('Formulário enviado: ', data);
    }

    return (
        <>
            <form class="w-full mt-4 " onSubmit={handleSubmit(formSubmit)}>
                <Fieldset
                    htmlFor="nome" label="Nome completo"
                    placeholder="Seu nome completo"
                    type="text"
                    props={{ ...register("name", { required: true }) }}>
                    <CiUser class="absolute left-2 top-4" />
                </Fieldset>
                <p className="text-red-600 text-sm">{errors.name?.message}</p>

                <Fieldset
                    htmlFor="email"
                    label="Email"
                    placeholder="seu@email.com"
                    type="email"
                    props={{ ...register("email", { required: true }) }}>
                    <CiMail class="absolute left-2 top-4" />
                </Fieldset>
                <p className="text-red-600 text-sm">{errors.email?.message}</p>

                <Fieldset htmlFor="phone"
                    label="Telefone"
                    placeholder="(85)99999-9999"
                    type="text"
                    props={{ ...registerWithMask("phone", "(99) 99999-9999", { required: true }) }}>
                    <CiPhone class="absolute left-2 top-4" />
                </Fieldset>
                <p className="text-red-600 text-sm">{errors.phone?.message}</p>

                <Fieldset htmlFor="password"
                    label="Senha"
                    placeholder="••••••••"
                    type={isPasswordVisible ? "text" : "password"}
                    props={{ ...register("password", { required: true }) }}>
                    <RiLockPasswordLine class="absolute left-2 top-4" />
                    <button
                        type="button"
                        class="absolute right-5 top-4 text-gray-500"
                        onClick={() => setIsPasswordVisible(!isPasswordVisible)}>
                        {isPasswordVisible ? <FaRegEye /> : <FaEyeSlash />}
                    </button>
                </Fieldset>
                <p className="text-red-600 text-sm">{errors.password?.message}</p>

                <Fieldset htmlFor="confirmPassword"
                    label="Confirme sua senha"
                    placeholder="••••••••"
                    type={isPasswordVisible ? "text" : "password"}
                    props={{ ...register("confirmPassword", { required: true }) }}>
                    <RiLockPasswordLine class="absolute left-2 top-4" />
                    <button
                        type="button"
                        class="absolute right-5 top-4 text-gray-500"
                        onClick={() => setIsPasswordVisible(!isPasswordVisible)}>
                        {isPasswordVisible ? <FaRegEye /> : <FaEyeSlash />}
                    </button>
                </Fieldset>
                <p className="text-red-600 text-sm">{errors.confirmPassword?.message}</p>

                <button type="submit" class="bg-black text-white rounded-lg p-3 w-full mt-4 font-semibold hover:bg-slate-900 hover:cursor-pointer" disabled={isSubmitting}>
                    {isSubmitting ? "..." : "Cadastrar"}
                </button>
            </form>
        </>
    )
};