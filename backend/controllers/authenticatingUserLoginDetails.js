const authenticatingUserLoginDetails = (req,res)=>{
    const {email, password} = req.body;
    // res.json(req.body)
    res.send(email);
}

module.exports = authenticatingUserLoginDetails;

