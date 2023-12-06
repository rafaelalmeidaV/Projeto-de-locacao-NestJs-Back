/* eslint-disable prettier/prettier */
import { Body, Controller, Get, Post } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { CreateClienteBody } from 'src/dtos/create-clientes-body';

@Controller('cliente')
export class ClienteController {
    constructor(private prisma: PrismaService) { }

    @Get()
    async getAll() {
        return await this.prisma.clientes.findMany();
    }

    @Post()
    async createCliente(@Body() body: CreateClienteBody) {
        try {
            const { nome, cpf, email, telefone } = body;
            const result = await this.prisma.clientes.create({
                data: {
                    nome,
                    cpf,
                    email,
                    telefone,
                },
            });

            return result;
        } catch (error) {
            console.error("Erro ao criar cliente:", error);
            throw error; 
        }


        

    }   
}
