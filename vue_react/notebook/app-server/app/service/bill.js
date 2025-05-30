const Service = require('egg').Service;

class BillService extends Service {
  async add(bill) {
  const {ctx} = this;
  try{
  const result = await ctx.model.Bill.create(bill);
  return result;
  }catch(err){
   console.log(err)
   return null;
  }
  }
  async update(params) {
    const {
      ctx,
      app
    } = this;
    try{
      // put patch
      let result = await ctx.model.Bill.update(
      {
        ...params
      },
      {
        where:{
          id:params.id,
          user_id:params.user_id
        } 
      }
    )
      return result;
    }catch(err){
      console.log(err)
      return null;
  }
    
  }
  async delete(id,user_id) {
   
  }
  async detail(id){
    const {app} = this;
    try {
      // orm sequelize 
      const result = await app.model.Bill.findOne({
        where:{
          id
        }
      })
      // console.log(result.dataValues,"----")
      return result.dataValues;
    } catch (error) {
      console.log(error)
      return null;
    }
  }

}
module.exports = BillService;