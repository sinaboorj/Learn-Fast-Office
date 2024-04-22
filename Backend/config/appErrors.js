
class appErrors extends Error {
    constructor(errorCode, msg, statusCode) {
        super(msg)
        this.errorCode = errorCode
        this.statusCode = statusCode
    }
    
}

export default appErrors