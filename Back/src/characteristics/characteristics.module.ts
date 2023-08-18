import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Characteristics } from './characteristics.model';
import { CharacteristicsService } from './characteristics.service';

@Module({
    imports: [SequelizeModule.forFeature([Characteristics])],
    providers: [CharacteristicsService],
})
export class CharacteristicsModule {}
