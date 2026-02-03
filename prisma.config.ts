import { defineConfig } from '@prisma/config';
import * as dotenv from 'dotenv';

// Isso força o carregamento do arquivo .env
dotenv.config();

export default defineConfig({
  datasource: {
    // Agora o process.env não virá vazio
    url: process.env.DATABASE_URL,
  },
});