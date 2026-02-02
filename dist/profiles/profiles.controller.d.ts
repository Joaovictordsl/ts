import { CreateProfileDto } from './dto/create-profile.dto';
export declare class ProfilesController {
    findAll(age: number): {
        age: number;
    }[];
    findOne(id: string): {
        id: string;
    };
    createProfile(createProfileDto: CreateProfileDto): {
        name: string;
        description: string;
    };
}
