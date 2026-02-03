import { CreateProfileDto } from './dto/create-profile.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';
import { PrismaService } from 'src/prisma/prisma.service';
export declare class ProfilesService {
    private prisma;
    constructor(prisma: PrismaService);
    private profiles;
    create(data: CreateProfileDto): Promise<{
        name: string;
        description: string;
        id: string;
    }>;
    findAll(): Promise<{
        name: string;
        description: string;
        id: string;
    }[]>;
    findOne(id: string): Promise<{
        name: string;
        description: string;
        id: string;
    }>;
    createProfile(createProfileDto: CreateProfileDto): {
        id: `${string}-${string}-${string}-${string}-${string}`;
        name: string;
        description: string;
    };
    update(id: string, updateProfileDto: UpdateProfileDto): {
        id: `${string}-${string}-${string}-${string}-${string}`;
        name: string;
        description: string;
    };
    remove(id: string): void;
}
