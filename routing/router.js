const router=require("express").Router()
const uath=require("../middleware/auth")
const googleauthcontainer=require("../controller/googleauthcontroller")
const usercontroller=require("../controller/usercontroller")
router.post("/create",usercontroller.register)
router.get("/get/all",usercontroller.getuser)
router.put("/update/:id",usercontroller.updateuser)
router.delete("/delete/:id",usercontroller.deleteUser)

router.get("/auth/google",passport.authenticate ('google', {
    scope: ['email', 'profile'],
  }))
router.get("/auth/google/callback", passport.authenticate ('google', {
    successRedirect: '/auth/protected',
    failureRedirect: '/auth/google/failure',
  }))
router.get("/auth/protected",(req, res) => {
    let name = req.user.displayName;
    res.send (`Hello ${name}`);
  })
router.get("/auth/google/failure",googleauthcontainer.something)
router.get("/",googleauthcontainer.sendfile)

module.exports=router