import { Fieldset } from "../../CardLogin/Fieldset";
import { CiUser } from "react-icons/ci";
import { CiMail } from "react-icons/ci";
import { RiLockPasswordLine } from "react-icons/ri";
import { CiPhone } from "react-icons/ci";
import { Button } from "../../CardLogin/Button";

export function FormSignUp() {
    return (
        <>
            <form class="w-full mt-4 space-y-2">
                <Fieldset htmlFor="nome" label="Nome completo" placeholder="Seu nome completo" type="text">
                    <CiUser class="absolute left-2 top-4" />
                </Fieldset>

                <Fieldset htmlFor="email" label="Email" placeholder="seu@email.com" type="email">
                    <CiMail class="absolute left-2 top-4" />
                </Fieldset>

                <Fieldset htmlFor="phone" label="Telefone" placeholder="(85)99999-9999" type="text">
                    <CiPhone class="absolute left-2 top-4" />
                </Fieldset>

                <Fieldset htmlFor="password" label="Senha" placeholder="••••••••" type="password">
                    <RiLockPasswordLine class="absolute left-2 top-4" />
                </Fieldset>

                <Fieldset htmlFor="confirmPassword" label="Confirme sua senha" placeholder="••••••••" type="password">
                    <RiLockPasswordLine class="absolute left-2 top-4" />
                </Fieldset>
                <Button text="Cadastrar" />
            </form>
        </>
    )
};