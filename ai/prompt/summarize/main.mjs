import OpenAI from 'openai';
import dotenv from 'dotenv';
    // 启动一个进程 process 后端 
    // env 对象 环境对象
    // 进程是分配资源的最小单位
    dotenv.config();
    console.log(process.env);
    const client=new OpenAI({
    // node 里的进程对象
    apiKeys:process.env.OPENAI_API_KEY,
    baseURL:process.env.OPENAI_API_BASE_URL
   });

   // es6 默认参数 
   // 通用的LLM 聊天完成接口函数， 复用 
   const getCompletion=async(prompt,model="gpt-3.5-turbo")=>{
   // 模拟用户提的问题
    const message=[{
    role:"user",
    content:prompt
    }];
   // AIGC chat 接口
   const response=await client.chat.completions.create({
    model:"gpt-3.5-turbo",
    messages:message,
    // LLM 生成内容的随机性 0-1 1 最随机 0 最确定
    temperature:0.9
   });
    return response.choices[0].message.content;
}

   const main = async () => {
  
    const prod_review = `
    我女儿生日时买了这个熊猫毛绒玩具，她很喜欢，到处都带着。
    它柔软、超级可爱，脸看起来很友好。
    不过，相对于我付的价格来说，它有点小。
    我想，同样的价格，也许还有其他更大的选择。
    它比预期早到了一天，所以我有机会自己玩了一会儿，然后才把它送给她。
    `;
    // 初级prompt 设计原则
    // 准确表达任务
    // 给他一个角色 
    // 三个反引号 减少它犯错的可能
    // 商品评论promp 模板
    // const prompt = `
    // 你的任务是生成来自电子商务网站产品评论的简单摘要。
    // 总结下面用三个反引号分隔评论，最多30个字。
    // 评论：'''${ prod_review }'''`
    const prompt = `
    你的任务是生成来自电子商务网站的产品评论的有关时间运输的简短摘要,
    以便向运输部门提供反馈。
    总结以下用三个反引号分隔的评论，最多100个字。
    并重点关注任何提及产品运输和交付的方面。
    评论：''''${ prod_review }''''
    `
    const response=await getCompletion(prompt,'gpt-4o')
    console.log(response);
    
  
}
main();