import { Fieldset } from "../Fieldset";
import { RiLockPasswordLine } from "react-icons/ri";
import { CiMail } from "react-icons/ci";
import { FaRegEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { Button } from "../Button";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { userLoginSchema } from "../../../data/schemaForms";

export function FormLogin() {
    const { register, handleSubmit, formState: { errors } } = useForm({ resolver: zodResolver(userLoginSchema) });
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    function formSubmit(data) {
        console.log('Formulário enviado: ', data);
    }

    return (
        <>
            <form class="w-full mt-4 space-y-2" onSubmit={handleSubmit(formSubmit)}>
                <Fieldset
                    htmlFor="email"
                    label="Email"
                    placeholder="seu@email.com"
                    type="email"
                    props={{ ...register("email", { required: true }) }}
                >
                    <CiMail class="absolute left-2 top-4" />
                </Fieldset>
                <p className="text-red-600 text-sm">{errors.email?.message}</p>

                <Fieldset
                    htmlFor="password"
                    label="Senha"
                    placeholder="••••••••"
                    type={isPasswordVisible ? "text" : "password"}
                    props={{ ...register("password", { required: true }) }}
                >
                    <RiLockPasswordLine class="absolute left-2 top-4" />
                    <button type="button" class="absolute right-4 top-4">
                        {isPasswordVisible ? (
                            <FaRegEye class="text-gray-400" onClick={() => setIsPasswordVisible(false)} />
                        ) : (
                            <FaEyeSlash class="text-gray-400" onClick={() => setIsPasswordVisible(true)} />
                        )}
                    </button>
                </Fieldset>
                <p className="text-red-600 text-sm">{errors.password?.message}</p>
                <Button text="Entrar" />
            </form>
        </>
    )
};
