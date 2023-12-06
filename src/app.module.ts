/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ImovelController } from './imovel/imovel.controller';
import { ImovelModule } from './imovel/imovel.module';
import { ImovelService } from './imovel/imovel.service';
import { PrismaService } from './database/prisma.service';
import { ClienteController } from './cliente/cliente.controller';
import { ClienteService } from './cliente/cliente.service';
import { ClienteModule } from './cliente/cliente.module';
import { LocacaoController } from './locacao/locacao.controller';
import { LocacaoService } from './locacao/locacao.service';
import { LocacaoModule } from './locacao/locacao.module';

@Module({
  imports: [ImovelModule, ClienteModule, LocacaoModule],
  controllers: [AppController, ImovelController, ClienteController, LocacaoController],
  providers: [AppService, ImovelService, PrismaService, ClienteService, LocacaoService],
})
export class AppModule {}
