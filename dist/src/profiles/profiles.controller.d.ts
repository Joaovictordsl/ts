import { CreateProfileDto } from './dto/create-profile.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';
import { ProfilesService } from './profiles.service';
import type { UUID } from 'crypto';
export declare class ProfilesController {
    private profileService;
    constructor(profileService: ProfilesService);
    findAll(): Promise<{
        name: string;
        description: string;
        id: string;
    }[]>;
    findOne(id: UUID): Promise<{
        name: string;
        description: string;
        id: string;
    }>;
    create(createProfileDto: CreateProfileDto): Promise<{
        name: string;
        description: string;
        id: string;
    }>;
    update(id: UUID, updateProfileDto: UpdateProfileDto): {
        id: `${string}-${string}-${string}-${string}-${string}`;
        name: string;
        description: string;
    };
    remove(id: UUID): void;
}
