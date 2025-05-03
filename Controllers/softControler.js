const Softwares = require('../Models/softEnqModel');

exports.softwareEnquiries = async (req, res) => {
    try {
        const { name, email, service, message } = req.body;

        const existingSoftware = await Softwares.findOne({ email });

        if (existingSoftware) {
            return res.status(406).json("This enquiry was already registered. Our team will contact you soon.");
        } else {
            const newSoftware = new Softwares({ name, email, service, message });
            await newSoftware.save();
            return res.status(200).json(newSoftware);
        }
    } catch (err) {
        console.error(err);
        return res.status(500).json("Internal server error");
    }
};

exports.getSoftEnq = async (req, res) => {
    try {
        const result = await Softwares.find();
        if (result.length > 0) {
            return res.status(200).json(result);
        } else {
            return res.status(404).json("No enquiries available");
        }
    } catch (err) {
        console.error(err);
        return res.status(500).json("Error fetching enquiries");
    }
};

// ✅ Delete software enquiry by ID
exports.deleteSoftEnq = async (req, res) => {
    try {
        const { id } = req.params;
        const deleted = await Softwares.findByIdAndDelete(id);

        if (!deleted) {
            return res.status(404).json({ message: "Enquiry not found" });
        }

        return res.status(200).json({ message: "Enquiry deleted successfully", deleted });
    } catch (err) {
        console.error(err);
        return res.status(500).json({ message: "Error deleting enquiry", error: err });
    }
};
