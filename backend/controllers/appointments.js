export const appointmentHelper=(req,res)=>{
    try{
        console.log("working fine");
    }
    catch{
        res.status(404).json({message:error.message});
    }
}