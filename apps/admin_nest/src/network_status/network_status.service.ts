import { CreateNetworkStatusInput } from '@/network_status/dto/create-network_status.input';
import { UpdateNetworkStatusInput } from '@/network_status/dto/update-network_status.input';
import { NetworkStatus } from '@/network_status/entities/network_status.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class NetworkStatusService {
  constructor(
    @InjectRepository(NetworkStatus)
    private readonly networkStatusRepository: Repository<NetworkStatus>,
  ) {}

  create(_createNetworkStatusInput: CreateNetworkStatusInput) {
    return 'This action adds a new networkStatus';
  }

  async findAll(): Promise<NetworkStatus[]> {
    return this.networkStatusRepository.find();
  }

  async findOne(id: number): Promise<NetworkStatus | null> {
    return this.networkStatusRepository.findOne({
      where: { id },
    });
  }

  update(id: number, _updateNetworkStatusInput: UpdateNetworkStatusInput) {
    return `This action updates a #${id.toString()} networkStatus`;
  }

  remove(id: number) {
    return `This action removes a #${id.toString()} networkStatus`;
  }
}
