import department from "../models/department.js";
import subject from "../models/subject.js";
 
export const index=async (req,res)=>{
    const subjects= await subject.find({},{ name:1}).lean();
    console.log(subjects)
    res.render('subjects/index',{subjects})
    }

export const create=async (req,res)=>{
    const departments= await department.find().lean();
    res.render('subjects/create',{departments});
}

export const store=async(req,res)=>{
    const { name, code , department }=req.body;
    await subject.create({
        name,
        code,
        department,
    })
   res.redirect('/subjects')
}

export const show=async(req,res)=>{
    const {_id}=req.params;
    const singlsubject= await subject.findById(_id).populate('department').lean();
    console.log(singlsubject)
    res.render('subjects/show',{ subject : singlsubject})
}