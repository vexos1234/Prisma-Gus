import {Request, Response} from "express";
import { PrismaClient } from "@prisma/client";
import {User, Post} from "../models/user";

const prisma = new PrismaClient ();

export async function insertUser(req: Request, res: Response) {
    const user: User = req.body;

    console.log(user);
}