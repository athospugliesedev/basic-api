import { Request, Response } from 'express';
import { prisma } from '../database/prisma-client';

export const createSchool = async (req: Request, res: Response) => {
  const { title } = req.body;

  try {
    const school = await prisma.school.create({
      data: {
        title,
      },
    });

    res.status(201).json(school);
  } catch (error) {
    console.error('Erro ao criar a escola:', error);
    res.status(500).json({ error: 'Erro ao criar a escola' });
  }
};
