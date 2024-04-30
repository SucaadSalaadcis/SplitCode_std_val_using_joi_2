const joi = require('joi');


// validation 
const studentVal = (stdObj) => {
    let schemaVal = joi.object({
       name: joi.string().required().min(3).max(8),
       address:joi.string().required().min(5).max(30),
       gender:joi.string().required().min(4).max(6),
       status:joi.string().required(),
       email: joi.string().email({tlds:{ allow:["com"]}}),
     /*   a valid email address string
            must have two domain parts e.g. example.com
              TLD must be .com or .net */
    })
    return schemaVal.validate(stdObj);
    // validate garey wixi function kaas loo so baaso
   }
   
module.exports = studentVal;   