export default {
 async fetch(request, env) {
  const {grammar}=await request.json();
  const prompt=`${grammar}を使った高校英文法の例文を1つ作成し、JSONで返してください。`;
  const response=await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${env.GEMINI_API_KEY}`,{
   method:'POST',
   headers:{'Content-Type':'application/json'},
   body:JSON.stringify({contents:[{parts:[{text:prompt}]}]})
  });
  return response;
 }
};