const studentModel = require("../Model/studentModel");

const studentVal = require("../Validation/studentVal");


// get 
const GetStudent = async (req, res)=> {
  const getData = await studentModel.find();
  if(getData){
    res.send(getData);
  }
};

// post
const createStudent = async(req, res) => {
 
    try {
        let {error} = studentVal(req.body);
     //   joi throws or returns ValidationError objects containing : message - string with a description of the error.
        if(error) {
            res.send(error.message);
        }else {

            const newData = new studentModel(req.body)
            const saveData = await newData.save();  
            // enum ka hda error kiisa arke 
            if(saveData) {
                res.send({
                   message:"Successfully  Created..."
              }) 
            }
          
        }

    } catch (error) {
        res.send(error.message);
    }
 

};




// put 
const updateStudent = async(req, res) => {
    const updateData = await studentModel.updateOne(
        {_id: req.params.id},
        {$set: req.body}
    );
    if(updateData){
        res.send("Student Has been updated successfully")
    }
};

// delete
const deleteStudent = async(req, res) => {
    const deleteData = await studentModel.deleteOne(
        {_id: req.params.id}
    );
   
    if(deleteData){
        res.send("Student has been  Deleted Succesfully")
    }
}

const SearchStudents = async(req, res) => {
    
    const SearchData = await studentModel.find({
        $or:[
            {name: {$regex: req.params.key}}
        ]
    })
    if(SearchData)
     res.send(SearchData)

}

const getTotalofStudents = async (req,res) => {
    const total = await studentModel.find().countDocuments()
    if(total){
    res.send({total})
    }
}
// single update
const SingleUpdate= async (req, res) => {
    const singleData = await studentModel.find(
        {_id : req.params.id}
        )
    if(singleData)
    res.send(singleData)
  }



// export all function 
module.exports = 
{GetStudent, createStudent, updateStudent,deleteStudent,SearchStudents,getTotalofStudents,SingleUpdate}