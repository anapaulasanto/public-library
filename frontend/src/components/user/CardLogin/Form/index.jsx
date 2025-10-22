import { Fieldset } from "../Fieldset";
import { RiLockPasswordLine } from "react-icons/ri";
import { CiMail } from "react-icons/ci";
import { FaRegEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { Button } from "../Button";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { userLoginSchema } from "../../../../data/schemaForms";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Toast } from "../../../Toast";

export const FormLogin = () => {
    const { register, handleSubmit, formState: { errors } } = useForm({ resolver: zodResolver(userLoginSchema) });
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const [erro, setErro] = useState(null);
    const [toast, setToast] = useState({visible: false})
    const navigate = useNavigate();

    async function formSubmit(data) {
        setErro(null)

        if (data.email && data.password) {
            try {
                await axios.get(`/user?email=${data.email}`);
                setToast({visible: true})
                setTimeout(() => {
                    navigate('/user/profile');
                }, 2000);
                
            } catch (error) {
                console.log('Erro ao logar usuario', error);
                setErro(error.message)
            }
        }
    }

    return (
        <>
            {toast.visible && <Toast message="Login realizado com sucesso!" />}
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
                    <button type="button" className="absolute right-4 top-4">
                        {isPasswordVisible ? (
                            <FaRegEye className="text-gray-400" onClick={() => setIsPasswordVisible(false)} />
                        ) : (
                            <FaEyeSlash className="text-gray-400" onClick={() => setIsPasswordVisible(true)} />
                        )}
                    </button>
                </Fieldset>
                <p className="text-red-600 text-sm">{errors.password?.message}</p>
                {erro && <p className="text-red-600 text-center pt-1 text-sm">{erro}</p>}

                <Button text="Entrar" />
            </form>
        </>
    )
};
