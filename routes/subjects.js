import { Router } from "express";
import subject from "../models/subject.js";
import department from "../models/department.js";
import { create, index, store,show } from "../controller/subject.js";
const router=new Router();

router.get('/',index)
router.get('/create',create)
router.post('/',store)
router.get('/:_id',show)






export default router;