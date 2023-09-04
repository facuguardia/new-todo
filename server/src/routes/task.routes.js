import { Router } from "express";
import { methods as taskController } from "./../controllers/task.controllers";

const router = Router();

router.get("/", taskController.getTasks);
// router.get('/:id',)
// router.post('/',)
// router.put('/:id',)
// router.delete('/:id',)

export default router;
