import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ImovelController } from './imovel/imovel.controller';
import { ImovelModule } from './imovel/imovel.module';
import { ImovelService } from './imovel/imovel.service';
import { PrismaService } from './database/prisma.service';

@Module({
  imports: [ImovelModule],
  controllers: [AppController, ImovelController],
  providers: [AppService, ImovelService, PrismaService],
})
export class AppModule {}
