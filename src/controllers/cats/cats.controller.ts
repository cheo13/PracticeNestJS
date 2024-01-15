import { Body, Controller,Delete,Get, Param, Patch, Post, Put } from '@nestjs/common';
import { CreateCatDto } from '../dto/create-cat.dto';
import { UpdateCatDto } from '../dto/update-cat.dto';
import { CatsService } from './cats.service';
import { Cat } from './interfaces/cats.interface';

@Controller('cats')
export class CatsController {
    constructor( private catsService: CatsService)  {}

    @Get()
    async findAll(): Promise<Cat[]> {

        return this.catsService.findAll();
    }
// @Get()
// finAll(): string    {
//     return 'This action returns all cats' ;
// }

@Get(':id')
findOne(@Param() id: string): string    {
    console.log(id);
    return `This action returns a #${id} cat`;
}

@Post()

async create(@Body() createCatDto: CreateCatDto) {
    this.catsService.create(createCatDto);
}

@Put(':id')

async update(@Param('id') id:number,@Body() updateCatDto: UpdateCatDto): Promise<string>  {
return `This action updates a #${id} cat`;

}

@Patch(':id')
async patchCats(@Param('id') id: number, @Body() updateCatDto: UpdateCatDto): Promise<string>{
    return `This action patches data of #${id} cat`;
}


@Delete(':id')
async remove(@Param('id') id: number): Promise<string> {

    return `This action removes a #${id} cat`;
 
}


}
