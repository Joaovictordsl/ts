"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfilesService = void 0;
const common_1 = require("@nestjs/common");
const crypto_1 = require("crypto");
const prisma_service_1 = require("../prisma/prisma.service");
let ProfilesService = class ProfilesService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    profiles = [
        {
            id: (0, crypto_1.randomUUID)(),
            name: 'John',
            description: "This is a description of John's profile."
        },
        {
            id: (0, crypto_1.randomUUID)(),
            name: 'Lara',
            description: "Minha futura varoa, se for da vontade de Deus."
        },
        {
            id: (0, crypto_1.randomUUID)(),
            name: 'teste',
            description: "this is a test profile, just in case."
        }
    ];
    async create(data) {
        return this.prisma.profile.create({
            data,
        });
    }
    async findAll() {
        return this.prisma.profile.findMany();
    }
    async findOne(id) {
        const matchingProfile = await this.prisma.profile.findUnique({
            where: { id: id },
        });
        if (!matchingProfile) {
            throw new common_1.NotFoundException(`Profile with ID ${id} not found`);
        }
        return matchingProfile;
    }
    createProfile(createProfileDto) {
        const newProfile = {
            id: (0, crypto_1.randomUUID)(),
            name: createProfileDto.name,
            description: createProfileDto.description
        };
        this.profiles.push(newProfile);
        return newProfile;
    }
    update(id, updateProfileDto) {
        let matchingProfile = this.profiles.find(profile => profile.id === id);
        if (!matchingProfile) {
            throw new common_1.NotFoundException(`Profile with ID: ${id} not found.`);
        }
        matchingProfile.name = updateProfileDto.name;
        matchingProfile.description = updateProfileDto.description;
        return matchingProfile;
    }
    remove(id) {
        let index = this.profiles.findIndex(profile => profile.id === id);
        if (index === -1) {
            throw new common_1.NotFoundException(`Profile with ID: ${id} not found.`);
        }
        this.profiles.splice(index, 1);
    }
};
exports.ProfilesService = ProfilesService;
exports.ProfilesService = ProfilesService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ProfilesService);
//# sourceMappingURL=profiles.service.js.map