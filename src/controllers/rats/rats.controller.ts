import { Body, Controller,Delete,Get, Param, Patch, Post, Put } from '@nestjs/common';
import { CreateRatDto } from '../dto/create-rat.dto';
import { UpdateRatDto } from '../dto/update-rat.dto';

@Controller('rats')
export class RatsController {

@Get()
finAll(): string    {
    return 'This action returns all Rats' ;
}

@Get(':id')
findOne(@Param() id: string): string    {
    console.log(id);
    return `This action returns a #${id} Rat`;
}

@Post()

async create(@Body() createRatDto: CreateRatDto): Promise<string>   {
    return 'This action adds a new Rat';
}

@Put(':id')

async update(@Param('id') id:number,@Body() updateRatDto: UpdateRatDto): Promise<string>  {
return `This action updates a #${id} rat`;

}

@Patch(':id')
async patchCats(@Param('id') id: number, @Body() updateRatDto: UpdateRatDto): Promise<string>{
    return `This action patches data of #${id} rat`;
}


@Delete(':id')
async remove(@Param('id') id: number): Promise<string> {

    return `This action removes a #${id} rat`;
 
}


}
