import { Test, TestingModule } from '@nestjs/testing';
import { LocacaoService } from './locacao.service';

describe('LocacaoService', () => {
  let service: LocacaoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LocacaoService],
    }).compile();

    service = module.get<LocacaoService>(LocacaoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
