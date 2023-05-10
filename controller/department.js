import department from "../models/department.js";


export const index=async(req,res)=>{

    const departments = await department.find({},{name:1}).lean();
   res.render('departments/index',{departments})

}
export const create =(req,res)=>{

    res.render('departments/create');
}
export const store=async (req,res)=>{
    const {name,code}=req.body;
   await  department.create({
        name,
        code
    });
    res.redirect("/departments")
}
export const show=async(req,res)=>{
    const {_id}=req.params;
    
    const singledepartment =await department.findById(_id).lean();
    res.render('departments/show',{department :singledepartment})
    
}