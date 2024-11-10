const Softwares = require('../Models/softEnqModel')


exports.softwareEnquiries = async (req, res) => {
    try {
        console.log(req.body);

        const { name, email, service, message } = req.body

        console.log(name, email, service, message);

        const existingSoftware = await Softwares.findOne({ email })

        if (existingSoftware) {
            res.status(406).json("This enquiry was already Registerd , Our Team Will be contacted Soon")
        }
        else {
            const newSoftware = new Softwares({
                name, email, service, message
            })

            await newSoftware.save()
            res.status(200).json(newSoftware)
        }
    } catch (err) {
        console.log(err);
        res.status(402).json(err)
    }



}

exports.getSoftEnq=async(req,res)=>{

    try{

    const result = await Softwares.find()

    if (result) {
        res.status(200).json(result)

    }else{
        res.status(404).json("No Enquiries available")
    }
} catch(err){
    res.status(406).json(err)
}
}