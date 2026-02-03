import { CreateProfileDto } from './dto/create-profile.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';
import { ProfilesService } from './profiles.service';
import type { UUID } from 'crypto';
export declare class ProfilesController {
    private profileService;
    constructor(profileService: ProfilesService);
    findAll(): Promise<{
        id: string;
        name: string;
        description: string;
    }[]>;
    findOne(id: UUID): Promise<{
        id: string;
        name: string;
        description: string;
    }>;
    create(createProfileDto: CreateProfileDto): Promise<{
        id: string;
        name: string;
        description: string;
    }>;
    update(id: UUID, updateProfileDto: UpdateProfileDto): {
        id: `${string}-${string}-${string}-${string}-${string}`;
        name: string;
        description: string;
    };
    remove(id: UUID): void;
}
