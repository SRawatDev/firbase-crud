const admin = require("firebase-admin");
const credentials = require("../key.json");
admin.initializeApp({
    credential: admin.credential.cert(credentials),
});
const db = admin.firestore();
const register = async (request, response) => {
    try {
        const userJson = {
            email: request.body.email,
            name: request.body.name,
            mobile: request.body.mobile,
        };
        const result = await db.collection("user").add(userJson);
        return response.status(200).json({
            data: result,
            status: true,
        });
    } catch (error) {
        return response.status(500).json({
            message: error.message,
            status: false,
        });
    }
}
const getuser = async (request, response) => {
    try {
        const data = db.collection("user")
        const allData = await data.get()
        const dataresponse = []
        allData.forEach(doc => {
            dataresponse.push(doc.data())
        })
        return response.status(200).json({
            data: dataresponse,
            status: true,
        });

    } catch (error) {
        return response.status(500).json({
            message: error.message,
            status: false,
        });

    }
}
const updateuser=async(request,response)=>{
    try {
        const id=request.params.id;
    const data=await db.collection("user").doc(id).update(request.body)
    return response.status(200).json(
        {
            status:true,
            data:data
        }
    )
        
    } catch (error) {
        return response.status(500).json({
            message: error.message,
            status: false,
        });

    }
}
const deleteUser=async(request,response)=>{
    try {
        const id=request.params.id;
        const ddeleteuser=await db.collection("user").doc(id).delete()
        return response.status(200).json(
            {
                message:" user is deleted from firbase store",
                status:true,
                data:ddeleteuser
            }
        )
        
    } catch (error) {
        return response.status(500).json({
            message: error.message,
            status: false,
        });
        
    }
}



module.exports = { register, getuser ,updateuser,deleteUser}