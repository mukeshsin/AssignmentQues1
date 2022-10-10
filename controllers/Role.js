//sImport Role Model
import Role from "../models/Role.js";

 // Get all Role
export const getRoles = async (req, res) => {
    const name = req.query.name;
    const description=req.query.description;
    Role.findAll({} )
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "500 errors to the user"
        });
      });
  };
// Get role by id
export const getRoleById = async (req, res) => {
    const id = req.params.id;

  Role.findByid(id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(200).send({
          message: `Cannot find Role with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: " 500 errors to the user with id=" + id
      });
    });
};

 // Create a new role
 export const createRole = async (req, res) => {
        try {
            await Role.create(req.body);
            res.json({
                "message": "Product Created"
            });
        } catch (err) {
            console.log(err);
        }
    }


//  Update role by id
export const updateRole = async (req, res) => {
    Role.update(req.body, {
        where: { id: req.params.id }
      })
        .then(num => {
          if (num == 1) {
            res.send({
              message: "Role was updated successfully."
            });
          } else {
            res.send({
              message: `Cannot update Role with id=${id}. Maybe Role was not found or req.body is empty!`
            });
          }
        })
        .catch(err => {
          res.status(500).send({
            message: "Error updating Role with id=" + id
          });
        });
    };

    
     

//  Delete role by id
 export const deleteRole = async (req, res) => {
    Role.destroy({
        where: {},
        truncate: false
      })
        .then(nums => {
          res.send({ message: `${nums} Roles were deleted successfully!` });
        })
        .catch(err => {
          res.status(500).send({
            message:
              err.message || "Some error occurred while removing all roles."
          });
        });
    };


