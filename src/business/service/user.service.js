const userRepository = require("../../persistence/repository/user.repository");

const createUser = (user) => {               
        const {usuario, apellido} = user;
        const db = userRepository.createUser([usuario, apellido]);
        return db;      
}

const getUser = async () => {
    const data = await userRepository.getUser();       
    return data; 
}

const deleteUser = async (id) => {
    const data = await userRepository.deleteUser(id);
    return data;
}

module.exports = {
    createUser,
    getUser,
    deleteUser
}
