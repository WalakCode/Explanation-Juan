const userService = require("../../business/service/user.service")
const Usuario = require("../../persistence/model/user.mode");

const postUser = (req, res) => {    
    const user = userService.createUser(req.body);
    
    return res.json({
        message:"created succesfully",
    })
}

const getUser = async (req, res) => {
    const userList = await userService.getUser();

    return res.json({
        data:userList.rows
    })
}

const deleteUser = async (req, res) => {
    const data = await userService.deleteUser(req.params.id);
    if(data)

        return res.json({
            message:"updated successfully"
        })
    return res.status(500).json({
        message:"Something went wrong :c"
    })
}

module.exports = {
    getUser,    
    postUser,
    deleteUser
}