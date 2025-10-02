import { z } from "zod";

export const userRegisterSchema = z.object({
    name: z
        .string()
        .min(1, { message: "O nome é obrigatório." })
        .max(100, { message: "O nome deve ter no máximo 100 caracteres." }),
    email: z
        .string()
        .min(1, { message: "O email é obrigatório." })
        .email({ message: "Email inválido." }),
    password: z
        .string()
        .min(8, { message: "A senha deve ter no mínimo 8 caracteres e possuir letras maiúsculas e minúsculas." })
        .regex(/[A-Z]/, { message: "A senha deve conter pelo menos uma letra maiúscula." })
        .regex(/[a-z]/, { message: "A senha deve conter pelo menos uma letra minúscula." }),
    confirmPassword: z
        .string()
        .min(8, { message: "A confirmação de senha é obrigatória." })
}).refine((data) => {
    return data.password === data.confirmPassword
}, {
    message: "As senhas não coincidem", path:
        ["confirmPassword"]
});

export const userLoginSchema = z.object({
    email: z
        .string()
        .min(1,{ message: "Campo obrigatório." })
        .email({ message: "Email inválido." }),
    password: z
        .string()
        .min(1, { message: "Campo obrigatório." })
});