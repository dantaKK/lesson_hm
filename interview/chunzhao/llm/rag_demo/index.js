const fs=require('fs');
const path=require('path');
const {OpenAI} = require('openai');

require('dotenv').config();

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
    baseURL: process.env.OPENAI_BASE_URL,
});

// promise 
// await fs.readFile
// 文件内容 + 问题   =>  prompt Engineering(上下文)
// 返回 RAG chatbot
// async => promise 语法糖 + generator
const readCourseInfo=()=>{
    return new Promise((resolve,reject)=>{
        try{
           const filePath=path.join(__dirname,'课程信息.txt');
           fs.readFile(filePath,'utf-8',(err,data)=>{
            if(err){
                reject(err);
            }else{
                resolve(data);
            }
           })
        }catch(error){
            reject(error); 
        }
    })
}
const answerQuestion=async()=>{
    const courseInfo = await readCourseInfo(); // I/0
    // console.log(courseInfo,'///');
    if(!courseInfo){
        return '没有课程信息'; 
    }
    // prompt 模板 chatbot 知识库应用
    // 用户的输入 问题 ？ 私人chatbot
    // 文件内容 prompt 
    // LLM token 比较大 的
    // LLM 学习 
    // AIGC 
    try{
        // prompt Template langchain
        const prompt=`
         你是一个课程助手，请根据以下课程信息回答问题：
         只回答课程信息相关的内容，如果问题与课程无关，
         请礼貌告知你只能回答与课程相关的问题。
         课程信息：${courseInfo}
         问题：${question}
        `
    

    const response = await openai.chat.completions.create({
       model:'gpt-3.5-turbo',
       messages:[
        {role:'system',content:`你是一个专业课程助手，根据课程信息回答问题`},
        {role:'user',content:prompt}],
        temperature:0,
        max_tokens:1000,
     
    })
    return response.choices[0].message.content;
    
}catch(error){
    console.log(error);
    return '回答失败';

}
}

const question = '有几门课程?';
answerQuestion(question).then(
    answer=>{
        console.log(answer);
    }
)