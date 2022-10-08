// Import Role Model
import Role from "../models/Role.js";
 
// Get all Role
export const getRoles = async (req, res) => {
    try {
        const role= await Role.findAll();
        res.send(role);
    } catch (err) {
        console.log(err);
    }
}
 
// Get role by id
export const getRoleById = async (req, res) => {
    try {
        const role = await Role.findAll({
            where: {
                id: req.params.id
            }
        });
        res.send(role[0]);
    } catch (err) {
        console.log(err);
    }
}
 
// Create a new role
export const createRole = async (req, res) => {
    try {
        await Role.create(req.body);
        res.json({
            "message": "Role Created"
        });
    } catch (err) {
        console.log(err);
    }
}
 
// Update role by id
export const updateRole = async (req, res) => {
    try {
        await Role.update(req.body, {
            where: {
                id: req.params.id
            }
        });
        res.json({
            "message": "Role Updated"
        });
    } catch (err) {
        console.log(err);
    }
}
 
// Delete role by id
export const deleteRole = async (req, res) => {
    try {
        await Role.destroy({
            where: {
                id: req.params.id
            }
        });
        res.json({
            "message": "Role Deleted"
        });
    } catch (err) {
        console.log(err);
    }
}