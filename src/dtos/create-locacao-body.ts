/* eslint-disable prettier/prettier */

import { IsNotEmpty, Length } from "class-validator";

export class CreateLocacaoBody {
    
    cliente: number

    imovel: number

    @IsNotEmpty()
    @Length(1, 50)
    dataInicio: string;

    @IsNotEmpty()
    @Length(1, 50)
    dataFim: string;

    @IsNotEmpty()
    @Length(1, 50)
    status: string;  
    
     
}