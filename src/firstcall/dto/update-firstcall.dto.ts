import { PartialType } from '@nestjs/mapped-types';
import { CreateFirstcallDto } from './create-firstcall.dto';

export class UpdateFirstcallDto extends PartialType(CreateFirstcallDto) {}
