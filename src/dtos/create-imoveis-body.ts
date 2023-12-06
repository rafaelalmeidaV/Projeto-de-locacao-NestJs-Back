/* eslint-disable prettier/prettier */

import { IsNotEmpty, Length } from "class-validator";

export class CreateImoveisBody {
    
    @IsNotEmpty()
    @Length(1, 50)
    tipo: string;
    
    @IsNotEmpty()
    @Length(1, 50)
    endereco: string;
    
    @IsNotEmpty()
    valor: number;
}