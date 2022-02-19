import Business from '../../../database/models/Business.js';


const controller = async (req, res)=>{

    const doc = await Business.findOne({name: 'prueba'});
    res.send(doc);
  
}

export default controller;

