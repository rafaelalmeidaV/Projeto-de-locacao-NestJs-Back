/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { ImovelController } from './imovel.controller';
import { ImovelService } from './imovel.service';
import { PrismaService } from 'src/database/prisma.service';

@Module({    
    controllers: [ImovelController],
    providers: [ImovelService, PrismaService],
})
export class ImovelModule {}
