
const users=require('../Models/controlModel')

exports.contactDetails = async (req, res) => {
    try {
        console.log(req.body);
    
        const { name, email, subject, message } = req.body;
    
        console.log(name, email, subject, message);

        const exsitingUser= await users.findOne({email})

        if (exsitingUser) {
            
            res.status(401).json("Already Submited Our team will be contact soon")
        }
        else{

            const newUser= new users({
                name, email, subject, message
            })

            await newUser.save()

            res.status(200).json(newUser)


        }


        // Respond back to client
    } catch (error) {
            console.log(error);
            
    }
};


exports.getStudentContact=async(req,res)=>{

    try{
        
    const result= await users.find()

    if (result) {
        
        res.status(200).json(result)
    }else{
        res.status(401).json("No Contact Details Available")
    }



    }catch(err){
        res.status(406).json(err)
    }

    
}
