"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUser = exports.updateUser = exports.getById = exports.createUser = void 0;
const prisma_client_1 = require("../database/prisma-client");
const createUser = async (req, res) => {
    const { name, email, password, schoolId } = req.body;
    try {
        const User = await prisma_client_1.prisma.user.create({
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
    }
    catch (error) {
        console.error('Erro ao criar o usuário:', error);
        res.status(500).json({ error: 'Erro ao criar o usuário' });
    }
};
exports.createUser = createUser;
const getById = async (req, res) => {
    const userId = req.params.id;
    try {
        const user = await prisma_client_1.prisma.user.findUnique({
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
        }
        else {
            res.status(404).json({ error: 'Usuário não encontrado' });
        }
    }
    catch (error) {
        console.error('Erro ao buscar o usuário por ID:', error);
        res.status(500).json({ error: 'Erro ao buscar o usuário por ID' });
    }
};
exports.getById = getById;
const updateUser = async (req, res) => {
    const userId = req.params.id;
    const { name, email, password } = req.body;
    try {
        const updatedUser = await prisma_client_1.prisma.user.update({
            where: { id: userId },
            data: { name, email, password },
        });
        res.json(updatedUser);
    }
    catch (error) {
        console.error('Erro ao atualizar o usuário:', error);
        res.status(500).json({ error: 'Erro ao atualizar o usuário' });
    }
};
exports.updateUser = updateUser;
const deleteUser = async (req, res) => {
    const userId = req.params.id;
    try {
        const deletedUser = await prisma_client_1.prisma.user.delete({
            where: { id: userId },
        });
        res.json(deletedUser);
    }
    catch (error) {
        console.error('Erro ao excluir o usuário:', error);
        res.status(500).json({ error: 'Erro ao excluir o usuário' });
    }
};
exports.deleteUser = deleteUser;
