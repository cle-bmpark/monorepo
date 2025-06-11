import { CreateNetworkStatusInput } from '@/network_status/dto/create-network_status.input';
import { UpdateNetworkStatusInput } from '@/network_status/dto/update-network_status.input';
import { Injectable } from '@nestjs/common';

@Injectable()
export class NetworkStatusService {
  create(_createNetworkStatusInput: CreateNetworkStatusInput) {
    return 'This action adds a new networkStatus';
  }

  findAll() {
    return `This action returns all networkStatus`;
  }

  findOne(id: number) {
    return `This action returns a #${id.toString()} networkStatus`;
  }

  update(id: number, _updateNetworkStatusInput: UpdateNetworkStatusInput) {
    return `This action updates a #${id.toString()} networkStatus`;
  }

  remove(id: number) {
    return `This action removes a #${id.toString()} networkStatus`;
  }
}
