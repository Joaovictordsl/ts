import { Controller, Get, Query, Param, Post, Body, Put, Delete, HttpCode, HttpStatus } from '@nestjs/common';
import { CreateProfileDto } from './dto/create-profile.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';
import { ProfilesService } from './profiles.service';

@Controller('profiles')
export class ProfilesController {

    constructor(private profileService: ProfilesService){
        // this.profileService = profileService;
    }

    @Get()
    findAll(){
        return this.profileService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string){
        return this.profileService.findOne(id);
    }

    @Post()
    createProfile(@Body() createProfileDto: CreateProfileDto){
        return {
            name: createProfileDto.name,
            description: createProfileDto.description
        }
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() updateProfileDto: UpdateProfileDto){
        return {
            id,
            name: updateProfileDto.name,
            description: updateProfileDto.description
        }
    }

    @Delete(':id')
    @HttpCode(HttpStatus.NO_CONTENT)
    remove(@Param('id') id: string){

    }

}
