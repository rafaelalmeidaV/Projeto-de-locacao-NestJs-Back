import { Test, TestingModule } from '@nestjs/testing';
import { LocacaoController } from './locacao.controller';

describe('LocacaoController', () => {
  let controller: LocacaoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LocacaoController],
    }).compile();

    controller = module.get<LocacaoController>(LocacaoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
