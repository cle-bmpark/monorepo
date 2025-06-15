import { CreatePcInput } from '@/pc/dto/create-pc.input';
import { FindPcsInput } from '@/pc/dto/find-pc.input';
import { UpdatePcInput } from '@/pc/dto/update-pc.input';
import { Pc } from '@/pc/entities/pc.entity';
import { BrainEnum, PcSortField, SortOrder } from '@/pc/type/enum';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Brackets, In, Repository } from 'typeorm';

@Injectable()
export class PcService {
  constructor(
    @InjectRepository(Pc)
    private readonly pcRepository: Repository<Pc>,
  ) {}

  create(_createPcInput: CreatePcInput) {
    return 'This action adds a new pc';
  }

  async findAll(input?: FindPcsInput): Promise<Pc[]> {
    const queryBuilder = this.pcRepository.createQueryBuilder('pc');

    queryBuilder
      .leftJoinAndSelect('pc.line', 'line')
      .leftJoinAndSelect('pc.position', 'position')
      .leftJoinAndSelect('pc.process', 'process')
      .leftJoinAndSelect('pc.cpuStatus', 'cpuStatus')
      .leftJoinAndSelect('pc.gpuStatus', 'gpuStatus')
      .leftJoinAndSelect('pc.networkStatus', 'networkStatus')
      .leftJoinAndSelect('pc.ramStatus', 'ramStatus')
      .leftJoinAndSelect('pc.storageStatuses', 'storageStatuses')
      .leftJoinAndSelect('pc.tempStatus', 'tempStatus')
      .leftJoinAndSelect('pc.pcDrivers', 'pcDrivers')
      .leftJoinAndSelect('pcDrivers.driver', 'driver')
      .leftJoinAndSelect('pc.pcPrograms', 'pcPrograms')
      .leftJoinAndSelect('pcPrograms.program', 'program');

    // 필터 로직
    if (input?.lineId !== undefined) {
      queryBuilder.andWhere('pc.lineId = :lineId', { lineId: input.lineId });
    }
    if (input?.positionId !== undefined) {
      queryBuilder.andWhere('pc.positionId = :positionId', { positionId: input.positionId });
    }
    if (input?.processId !== undefined) {
      queryBuilder.andWhere('pc.processId = :processId', { processId: input.processId });
    }
    if (input?.brain !== undefined) {
      queryBuilder.andWhere('pc.brain = :brain', { brain: input.brain });
    }
    if (input?.isLicense !== undefined) {
      queryBuilder.andWhere('pc.isLicense = :isLicense', { isLicense: input.isLicense });
    }
    if (input?.isNetwork !== undefined) {
      queryBuilder.andWhere('pc.isNetwork = :isNetwork', { isNetwork: input.isNetwork });
    }
    if (input?.isProgram !== undefined) {
      queryBuilder.andWhere('pc.isProgram = :isProgram', { isProgram: input.isProgram });
    }
    if (input?.launcherUpdatedAtStart) {
      const startDate = new Date(input.launcherUpdatedAtStart);
      // 시간 정보가 없다면 해당 날짜의 시작 (00:00:00.000)으로 설정
      startDate.setHours(0, 0, 0, 0);
      queryBuilder.andWhere('pc.launcherUpdatedAt >= :startDate', { startDate });
    }
    if (input?.launcherUpdatedAtEnd) {
      const endDate = new Date(input.launcherUpdatedAtEnd);
      // 시간 정보가 없다면 해당 날짜의 끝 (23:59:59.999)으로 설정
      endDate.setHours(23, 59, 59, 999);
      queryBuilder.andWhere('pc.launcherUpdatedAt <= :endDate', { endDate });
    }

    // 검색 로직
    if (input?.searchQuery) {
      const searchQuery = `%${input.searchQuery.toLowerCase()}%`;

      queryBuilder.andWhere(
        new Brackets((qb) => {
          // PC 엔티티의 직접 필드 검색
          qb.where('LOWER(pc.serialNumber) LIKE :searchQuery', { searchQuery }).orWhere(
            'LOWER(pc.anydeskIp) LIKE :searchQuery',
            { searchQuery },
          );

          if (input.searchQuery) {
            const lowerCaseSearchQuery = input.searchQuery.toLowerCase();
            Object.values(BrainEnum).forEach((enumValue) => {
              if (enumValue.toLowerCase().includes(lowerCaseSearchQuery.replace(/%/g, ''))) {
                qb.orWhere('pc.brain = :enumValue', { enumValue });
              }
            });
          }

          // line, position, process 필드 검색 (code와 name 포함)
          qb.orWhere('LOWER(line.code) LIKE :searchQuery', { searchQuery })
            .orWhere('LOWER(line.name) LIKE :searchQuery', { searchQuery })
            .orWhere('LOWER(position.code) LIKE :searchQuery', { searchQuery })
            .orWhere('LOWER(position.name) LIKE :searchQuery', { searchQuery })
            .orWhere('LOWER(process.code) LIKE :searchQuery', { searchQuery })
            .orWhere('LOWER(process.name) LIKE :searchQuery', { searchQuery });

          // program 필드 검색 (name과 version 포함)
          qb.orWhere('LOWER(program.name) LIKE :searchQuery', { searchQuery }).orWhere(
            'LOWER(program.version) LIKE :searchQuery',
            { searchQuery },
          );
        }),
      );
    }

    // 정렬 로직
    const sortOrder = input?.sortOrder ?? SortOrder.ASC;

    if (input?.orderBy) {
      switch (input.orderBy) {
        case PcSortField.SERIAL_NUMBER:
          queryBuilder.addOrderBy('pc.serialNumber', sortOrder);
          break;
        case PcSortField.LINE_ID:
          queryBuilder.addOrderBy('pc.lineId', sortOrder);
          break;
        case PcSortField.POSITION_ID:
          queryBuilder.addOrderBy('pc.positionId', sortOrder);
          break;
        case PcSortField.PROCESS_ID:
          queryBuilder.addOrderBy('pc.processId', sortOrder);
          break;
        case PcSortField.BRAIN:
          queryBuilder.addOrderBy('pc.brain', sortOrder);
          break;
        case PcSortField.IS_LICENSE:
          queryBuilder.addOrderBy('pc.isLicense', sortOrder);
          break;
        case PcSortField.IS_NETWORK:
          queryBuilder.addOrderBy('pc.isNetwork', sortOrder);
          break;
        case PcSortField.IS_PROGRAM:
          queryBuilder.addOrderBy('pc.isProgram', sortOrder);
          break;
        case PcSortField.ANYDESK_IP:
          queryBuilder.addOrderBy('pc.anydeskIp', sortOrder);
          break;
        case PcSortField.LAUNCHER_UPDATED_AT:
          queryBuilder.addOrderBy('pc.launcherUpdatedAt', sortOrder);
          break;
        default:
          queryBuilder.addOrderBy('pc.isProgram', sortOrder);
          queryBuilder.addOrderBy('pc.isNetwork', sortOrder);
          queryBuilder.addOrderBy('pc.id', sortOrder);
          break;
      }
    } else {
      queryBuilder.addOrderBy('pc.isProgram', sortOrder);
      queryBuilder.addOrderBy('pc.isNetwork', sortOrder);
      queryBuilder.addOrderBy('pc.id', sortOrder);
    }

    // --- 4. 페이지네이션 로직 추가 ---
    const page = input?.page ?? 1; // 기본값 1페이지
    const pageSize = input?.pageSize ?? 10; // 기본값 페이지당 10개

    const skip = (page - 1) * pageSize;
    const take = pageSize;

    queryBuilder.skip(skip);
    queryBuilder.take(take);

    return queryBuilder.getMany();
  }

  async findOne(id: number): Promise<Pc | null> {
    return this.pcRepository.findOne({
      where: { id },
      relations: [
        'line',
        'position',
        'process',
        'cpuStatus',
        'gpuStatus',
        'networkStatus',
        'ramStatus',
        'storageStatuses',
        'tempStatus',
        'pcDrivers',
        'pcDrivers.driver',
        'pcPrograms',
        'pcPrograms.program',
      ],
    });
  }

  async findByIds(ids: number[]): Promise<Pc[]> {
    return this.pcRepository.find({
      where: {
        id: In(ids),
      },
      relations: [
        'line',
        'position',
        'process',
        'cpuStatus',
        'gpuStatus',
        'networkStatus',
        'ramStatus',
        'storageStatuses',
        'tempStatus',
        'pcDrivers',
        'pcDrivers.driver',
        'pcPrograms',
        'pcPrograms.program',
      ],
    });
  }

  update(id: number, _updatePcInput: UpdatePcInput) {
    return `This action updates a #${id.toString()} pc`;
  }

  remove(id: number) {
    return `This action removes a #${id.toString()} pc`;
  }
}
