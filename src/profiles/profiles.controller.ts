import { Controller, Get, Query, Param, Post, Body, Put, Delete, HttpCode, HttpStatus, NotFoundException } from '@nestjs/common';
import { CreateProfileDto } from './dto/create-profile.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';
import { ProfilesService } from './profiles.service';

@Controller('profiles')
export class ProfilesController {
    constructor(private profileService: ProfilesService){
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
        return this.profileService.createProfile(createProfileDto);
    }


    @Put(':id')
    update(@Param('id') id: string, @Body() updateProfileDto: UpdateProfileDto){
        return this.profileService.update(id, updateProfileDto);
    }

    
    @Delete(':id')
    @HttpCode(HttpStatus.NO_CONTENT)
    remove(@Param('id') id: string){
        return this.profileService.remove(id);
    }

}
