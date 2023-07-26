import { Router } from "express";
import { methods as taskController } from "./../controller/task.controller";

const router = Router();

router.get("/", taskController.getTasks);
// router.get('/:id',)
// router.post('/',)
// router.put('/:id',)
// router.delete('/:id',)

export default router;
