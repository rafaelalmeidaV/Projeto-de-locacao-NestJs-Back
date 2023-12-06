import { Test, TestingModule } from '@nestjs/testing';
import { ImovelService } from './imovel.service';

describe('ImovelService', () => {
  let service: ImovelService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ImovelService],
    }).compile();

    service = module.get<ImovelService>(ImovelService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
