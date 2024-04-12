const Bootcamp = require("../models/Bootcamp");
const color = require('colors')

//@ desc Get all bootcamps
//@route  GET /api/v1/bootcamps
// @access PUblic
exports.index =  async (req, res, next) => {


    try{
        const bootcamps = await Bootcamp.find()
        res.status(200).json({
            success: true,
            count: bootcamps.length,
            data: bootcamps,
        })
    }catch(err){
        console.log(`Error loading bootcamps: ${err.message}`.red.bold)
    }
};

//@ desc Get single bootcamps
//@route  GET /api/v1/bootcamps/:id"
// @access PUblic

exports.show = async (req, res, next) => {
    const id = req.params.id

    try{
        const bootcamp = await Bootcamp.findById(id)
        if(!bootcamp){
            res.status(400).json({
                success: false,
                message : {
                    error: `Bootcamp with id of ${id} not found`
                }
            })
        }

        res.status(200).json({
            success: true,
            data: bootcamp,
        })
    }catch(err){
        res.json({
            success: false,
            message : {
                error: `Error getting bootcamp with id of ${id}`
            }
        })
    }
};

//@desc create single bootcamps
//@route  POST /api/v1/bootcamps/"
// @access PUblic

exports.store = async (req, res, next) => {

    // this is a try catch block ,will allow us to handle error properly 

  try {
    const bootcamp = await Bootcamp.create(req.body);

    res.status(201).json({
      success: true,
      data: {
        bootcamp,
      },
    });
  } catch (err) {
    res.status(400).json({
        success: false,
        error: err.message,
    })
  }
};

//@desc update single bootcamps
//@route  PUT /api/v1/bootcamps/:id"
// @access PUblic

exports.update = async (req, res, next) => {
    const bootcamp = await Bootcamp.findByIdAndUpdate(req.params.id, req.body, {
        new: true, 
        runValidator: true
    })

    if(!bootcamp){
        res.status(400).json({
            success: false, 
            message : "Error updating bootcamp"
        })
    }

    res.status(200).json(
        {
            "success": true,  
            "data": bootcamp
        }
    )
};

//@desc delete single bootcamps
//@route  DELETE /api/v1/bootcamps/:id"
// @access PUblic

exports.destroy = async (req, res, next) => {
    const bootcamp = await Bootcamp.findByIdAndDelete(req.params.id)

    if(!bootcamp){
        res.status(400).json({
            success: false, 
            message : "Error deleting bootcamp"
        })
    }

    res.status(200).json(
        {
            "success": true,  
            "data": bootcamp
        }
    )
};
