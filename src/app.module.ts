import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config'; // 1. Importe isso
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProfilesModule } from './profiles/profiles.module';
import { PrismaService } from './prisma/prisma.service';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }), // 2. Adicione aqui (precisa ser o primeiro)
    ProfilesModule,
  ],
  controllers: [AppController],
  providers: [AppService, PrismaService],
  exports: [PrismaService], // 3. Exporte para que outros módulos usem o banco
})
export class AppModule {}