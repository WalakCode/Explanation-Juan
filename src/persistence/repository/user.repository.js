const database = require("../../config/database");

const createUser = async (user) => {       
    try{ 
        const newUser = await database.query(`INSERT INTO public."user"(usuario, apellido, "fechaIns") VALUES ($1, $2, NOW())`, user);
        return newUser;
    }catch(error){
        console.error(error);
        return null;
    }    
}

const getUser = async () => {
    const userList = {
        name: "fetch-user",
        text: `SELECT * FROM public."user" u WHERE u.flgeli = '0' ORDER BY u."id" ASC`        
    }

    const res = await database.query(userList);
    return res;    
}

const deleteUser = async (id) => {    
    try{
        await database.query(`UPDATE public."user" SET flgEli = '1' WHERE id = $1`, [id]);        
        return true;
    }catch(error){
        console.error(error);
    }
}

module.exports = {
    createUser,
    getUser,
    deleteUser
}