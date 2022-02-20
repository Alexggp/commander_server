import mongoose from 'mongoose';

import models from '../../../database/models.js';

const ObjectId =  mongoose.Types.ObjectId;

const controller = async (req, res)=>{
  const businessId = req.params.id
  try{
    const business = await models.BusinessModel.findById(businessId)
    business.menu = await models.SectionModel.find({business: new ObjectId(business._id)})
    for(const section of business.menu){
      section.items = await models.MenuItemModel.find({section: new ObjectId(section._id)});
    }
    res.send(business);  
  }
  catch (e) {
    res.status(404).send()
 }
  
}

export default controller;

