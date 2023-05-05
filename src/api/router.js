import express from 'express';
import { torrentController } from './controllers';
export const router = new express.Router();
router.post('/', torrentController.post);
