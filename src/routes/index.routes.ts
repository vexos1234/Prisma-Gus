import { Router } from "express";

import { insertUser } from "../Controllers/prisma.controller";

const router = Router();

router.route("/api/createuser").post(insertUser);

export default router;