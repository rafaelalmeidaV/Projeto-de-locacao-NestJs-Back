/* eslint-disable prettier/prettier */
import { IsNotEmpty, Length } from "class-validator";

export class CreateClienteBody {
    
        @IsNotEmpty()
        @Length(1, 50)
        nome: string;

        @IsNotEmpty()
        @Length(1, 50)
        cpf: string;

        @IsNotEmpty()
        @Length(1, 50)
        email: string;

        @IsNotEmpty()
        @Length(1, 50)
        telefone: string;
}