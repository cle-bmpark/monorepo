import { DriverResolver } from '@/driver/driver.resolver';
import { DriverService } from '@/driver/driver.service';
import { Test, TestingModule } from '@nestjs/testing';

describe('DriverResolver', () => {
  let resolver: DriverResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DriverResolver, DriverService],
    }).compile();

    resolver = module.get<DriverResolver>(DriverResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
