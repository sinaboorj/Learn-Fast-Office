
const errorHandler = (error, req, res, next) => {
  
    if (error.name === 'ValidationError')
        return res.status(500).send(error.details[0].message)
       
    res.status(505).send(`Something is failed`)
}

export default errorHandler
