// src/controllers/UserController.ts
import { Request, Response } from 'express';
import { User } from '../models/user';
import { prisma } from '../database/prisma-client';



export const createUser = async (req: Request, res: Response) => {
  const { name, email, password, schoolId } = req.body;

  try {
    const User = await prisma.user.create({
      data: {
        name,
        email,
        password,
        school: {
          connect: { id: schoolId },
        },
        role: 'user',
        createdAt: new Date(),
        updatedAt: new Date(), 
        profileImage: 'URL_da_imagem_de_perfil', 
        isActive: true,
      },
    });
    

    res.status(201).json(User);
  } catch (error) {
    console.error('Erro ao criar o usuário:', error);
    res.status(500).json({ error: 'Erro ao criar o usuário' });
  }
};

export const getById = async (req: Request, res: Response) => {
  const userId = req.params.id;

  try {
    const user = await prisma.user.findUnique({
      where: {
        id: userId,
      },
      include: {
        school: true,
      },
    });

    if (user) {
      res.json({
        id: user.id,
        name: user.name,
        email: user.email,
        school: {
          id: user.school.id,
          title: user.school.title, 
        },
      });
    } else {
      res.status(404).json({ error: 'Usuário não encontrado' });
    }
  } catch (error) {
    console.error('Erro ao buscar o usuário por ID:', error);
    res.status(500).json({ error: 'Erro ao buscar o usuário por ID' });
  }
};

export const updateUser = async (req: Request, res: Response) => {
  const userId = req.params.id;
  const { name, email, password } = req.body;

  try {
    const updatedUser = await prisma.user.update({
      where: { id: userId },
      data: { name, email, password },
    });

    res.json(updatedUser);
  } catch (error) {
    console.error('Erro ao atualizar o usuário:', error);
    res.status(500).json({ error: 'Erro ao atualizar o usuário' });
  }
};

export const deleteUser = async (req: Request, res: Response) => {
  const userId = req.params.id;

  try {
    const deletedUser = await prisma.user.delete({
      where: { id: userId },
    });

    res.json(deletedUser);
  } catch (error) {
    console.error('Erro ao excluir o usuário:', error);
    res.status(500).json({ error: 'Erro ao excluir o usuário' });
  }
};