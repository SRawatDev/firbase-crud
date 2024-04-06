const auth=async(request,response,nextfunction)=>
{
    return request.user?nextfunction():response.sendStatus(401)
}
module.exports=auth