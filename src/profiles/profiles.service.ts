import { Injectable } from '@nestjs/common';
import { randomUUID } from 'crypto';
import { CreateProfileDto } from './dto/create-profile.dto';

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

        let profiles = this.profiles;

        let profile = profiles.find(obj => obj.id === id);
        
        return profile;
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

    update(){
        
    }


}
