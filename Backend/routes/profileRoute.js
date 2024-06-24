import profileController from '../controller/profileController.js'
import experss from 'express'
import authorization from '../middelwares/authorization.js'

const profileRouter = experss.Router()

 profileRouter.put('/update/:userID?', authorization, profileController.updateUser)
 profileRouter.get('/:userID?', authorization, profileController.get)

export default profileRouter  



       