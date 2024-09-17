import { Test, TestingModule } from '@nestjs/testing';
import { DatabaswService } from './databasw.service';

describe('DatabaswService', () => {
  let service: DatabaswService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DatabaswService],
    }).compile();

    service = module.get<DatabaswService>(DatabaswService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
