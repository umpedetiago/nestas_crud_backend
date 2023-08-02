import { PartialType } from '@nestjs/mapped-types';
import { CreateTestejDto } from './create-testej.dto';

export class UpdateTestejDto extends PartialType(CreateTestejDto) {}
