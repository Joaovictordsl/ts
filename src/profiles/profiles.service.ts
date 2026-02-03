import { Injectable, NotFoundException } from '@nestjs/common';
import { randomUUID } from 'crypto';
import { CreateProfileDto } from './dto/create-profile.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';

@Injectable()
export class ProfilesService {
    private profiles = [
        {
            id: randomUUID(),
            name: 'John',
            description: "This is a description of John's profile."
        },
        {
            id: randomUUID(),
            name: 'Lara',
            description: "Minha futura varoa, se for da vontade de Deus."
        },
        {
            id: randomUUID(),
            name: 'teste',
            description: "this is a test profile, just in case."
        }
    ]

    findAll(){
        return this.profiles;
    }

    findOne(id: string){

        const matchingProfile = this.profiles.find(obj => obj.id === id);
        
        if (!matchingProfile){
            throw new NotFoundException(`Profile with ID: ${id} not found.`)
        }
        return matchingProfile;
    }

    createProfile(createProfileDto: CreateProfileDto){

        const newProfile = {
            id: randomUUID(),
            name: createProfileDto.name,
            description: createProfileDto.description
        }

        this.profiles.push(newProfile);
        return newProfile;
    }

    update(id: string, updateProfileDto: UpdateProfileDto){
        
        let index = this.profiles.findIndex(index => index.id === id);
        
        if(!index) {
            return {}
        }

        const updatedProfile = {
            ...this.profiles[index],
            name: updateProfileDto.name,
            description: updateProfileDto.description,
        }
        
        this.profiles[index] = updatedProfile;
        return updatedProfile;

    }

    remove(id: string){
        let index = this.profiles.findIndex(profile => profile.id === id);

        if (index !== -1){
            this.profiles.splice(index, 1);
        }   
    }
}
