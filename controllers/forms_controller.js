exports.saveForm = (req, res) => {

    console.log(req.body)

    res.status(200).send({ message: "We have received your data succesfully!!"})
}