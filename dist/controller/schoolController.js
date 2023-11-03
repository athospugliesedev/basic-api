"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createSchool = void 0;
const prisma_client_1 = require("../database/prisma-client");
const createSchool = async (req, res) => {
    const { title } = req.body;
    try {
        const school = await prisma_client_1.prisma.school.create({
            data: {
                title,
            },
        });
        res.status(201).json(school);
    }
    catch (error) {
        console.error('Erro ao criar a escola:', error);
        res.status(500).json({ error: 'Erro ao criar a escola' });
    }
};
exports.createSchool = createSchool;
