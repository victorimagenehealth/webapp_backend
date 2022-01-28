const express = require("express")
const router = express.Router()
const forms = require("./controllers/forms_controller")


router.post("/forms", forms.saveForm)

module.exports=router
