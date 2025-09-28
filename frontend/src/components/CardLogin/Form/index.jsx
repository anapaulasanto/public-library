import { Fieldset } from "../Fieldset";
import { RiLockPasswordLine } from "react-icons/ri";
import { CiMail } from "react-icons/ci";
import { Button } from "../Button";

export function FormLogin() {
    return (
        <>
            <form class="w-full mt-4 space-y-2">
                <Fieldset htmlFor="email" label="Email" placeholder="seu@email.com" type="email">
                    <CiMail class="absolute left-2 top-4" />
                </Fieldset>
                <Fieldset htmlFor="password" label="Senha" placeholder="••••••••" type="password">
                    <RiLockPasswordLine class="absolute left-2 top-4" />
                </Fieldset>
                <Button text="Entrar" />
            </form>
        </>
    )
};
