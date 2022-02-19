import Business from '../../../database/models/Business.js';


const controller = async (req, res)=>{

  const doc = new Business({ name: 'prueba', currency: '€' });
  await doc.save();
  res.send(doc)
  
}

export default controller;