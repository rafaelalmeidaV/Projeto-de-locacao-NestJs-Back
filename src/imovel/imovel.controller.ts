/* eslint-disable prettier/prettier */
import { Body, Controller, Get, Post } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { CreateImoveisBody } from 'src/dtos/create-imoveis-body';



@Controller('imovel')
export class ImovelController {
    constructor(private prisma: PrismaService) { }

    @Get()
    async getAll() {
        return await this.prisma.imoveis.findMany();
    }

    @Post("")
    async createImovel(@Body() body: CreateImoveisBody) {
        try {
            const { tipo, endereco, valor } = body;

            console.log("tipo", tipo, "endereco", endereco, "valor", valor  ) 
            const result = await this.prisma.imoveis.create({
                data: {
                    tipo,
                    endereco,
                    valor,
                },
            });

            return result;
        } catch (error) {
            console.error("Erro ao criar imóvel:", error);
            throw error; 
        }
    }


}
