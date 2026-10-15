import transaction from "../model/transaction.js";

export const createTrans=async(req,res,next)=>{
    try{
      const trans=await transaction.create({...req.body})
      res.status(201).json(trans)
    }catch(err){
        next(err)
    }
}

export const getTrans=async(req,res,next)=>{
    try{
        const trans =await transaction.find()
        res.json(trans)
    }catch(err){
        next(err)
    }
}

export const updateTrans=async(req,res,next)=>{
    try{
        const { id }=req.params;
       const trans= await transaction.findByIdAndUpdate(id,req.body,{new:true})
              res.json(trans)
       res.json(trans)

       if(!trans){
        return res.status(404).json({message:"trans not found"})
       }
    }catch(err){
      next(err)
    }
    
 }
export const deleteTrans =async (req,res,next)=>{
    try{
        const {id}=req.params
       const trans =await transaction.findByIdAndDelete(id,req.body)
       if(!trans) return res.status(404).json({message:"trans not found"})
        res.send({message:"deleted"})
    }catch(err){
        next(err)
    }
}