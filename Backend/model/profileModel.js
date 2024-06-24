import connection from "../config/connection.js";

class profileModel { 

    static getByEmail = async (email) => {
        const [result] = await connection.query(`SELECT * FROM users WHERE email = ?`, [email])
        return result[0]
    }
   
    static getById = async (userID) => {
        const [result] = await connection.query(`SELECT * FROM users WHERE BINARY userID = ?`, [userID])
        return result[0]
    }

    static getIDandToken = async (userID, token) => {
        const [result] = await connection.query(`SELECT * FROM users WHERE BINARY userID = ? and BINARY token = ?`, [userID, token])
        return result[0]
    }
  
    static updateUser = async (userID, firstName, lastName, current_location, phoneNumber, picName, url, linkedin, address, discription, jobTitle, No, unit, experiecne, start, position ) => {
        const [result] = await connection.query(`
        UPDATE users 
        SET firstName = ?, lastName = ?, current_location = ?, phoneNumber = ?, picName= ?, url= ?, linkedin=? , address=? , discription=? , jobTitle=? , No=? , unit=? , experiecne=? , start=? , position=?
        WHERE BINARY userID = ?`,
            [firstName, lastName, current_location, phoneNumber, picName, url, linkedin, address, discription, jobTitle, No, unit, experiecne, start, position, userID])
        return this.getById(userID)
    }
    
}

export default profileModel 