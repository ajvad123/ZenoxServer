 const students=require('../Models/detailsModel')


 exports.studentDetails=async(req,res)=>{


    const {  name,email,phone,qualification,course,place,whatsapp}= req.body

    console.log(name,email,phone,qualification,course,place,whatsapp);

     const exsitingUser= await students.findOne({email})

     if (exsitingUser) {
        res.status(401).json("User Already Registered")
     }else{

        const newUser= new students({

            name,email,phone,qualification,course,place,whatsapp

        })

        await newUser.save()

        res.status(200).json(newUser)

     }
    

     

 }

 exports.getDetails=async(req,res)=>{

   try{
      const result= await students.find()

      if (result) {
   
         res.status(200).json(result)
         
      }else{
         res.status(401).json("No Details Available")
      }

   }catch(err){
      res.status(406).json(err)
   }

 
 }