// Import express
import express from "express";
// Import Role Controller
import { 
    getRoles,
    getRoleById,
    createRole,
    updateRole,
    deleteRole
 } from "../controllers/Role.js";


 // Init express router
const router = express.Router();

// Route get all roles
 router.get('/roles/list', getRoles);
// Route get role by id
router.get('/roles/:id', getRoleById);
// // Route add a new role
router.post('/roles/add', createRole);
// Route update role by id
 router.put('/roles/edit/:id', updateRole);
 // Route delete role by id
 router.delete('/roles/delete/:id', deleteRole);

// export router
export default router;