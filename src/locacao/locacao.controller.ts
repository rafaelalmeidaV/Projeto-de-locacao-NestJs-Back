/* eslint-disable prettier/prettier */
import { Body, Controller, Post } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { CreateLocacaoBody } from 'src/dtos/create-locacao-body';

@Controller('locacao')
export class LocacaoController {
    constructor(private prisma: PrismaService) { }

    @Post("")
    async createImovel(@Body() body: CreateLocacaoBody) {
        try {
            const { dataInicio, dataFim, status, cliente, imovel } = body;

            
            const result = await this.prisma.locacao.create({
                data: {
                    dataInicio,
                    dataFim,
                    status,
                    cliente: { connect: { idCliente: cliente } },
                    imovel: { connect: { idImovel: imovel } },

                },
            });

            return result;
        } catch (error) {
            console.error("Erro ao criar imóvel:", error);
            throw error; 
        }
    }
}
                


