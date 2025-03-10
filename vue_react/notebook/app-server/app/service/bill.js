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

}
module.exports = BillService;