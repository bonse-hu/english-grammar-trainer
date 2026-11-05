document.getElementById("generateBtn").addEventListener("click", async () => {
 const grammar=document.getElementById("grammar").value;
 document.getElementById("result").textContent="生成中...";
 const res=await fetch("https://YOUR-WORKER.workers.dev/generate",{
  method:"POST",
  headers:{"Content-Type":"application/json"},
  body:JSON.stringify({grammar})
 });
 const data=await res.json();
 document.getElementById("result").textContent=
 `英文: ${data.english}

和訳: ${data.japanese}

解説: ${data.explanation}`;
});
if('serviceWorker' in navigator){navigator.serviceWorker.register('sw.js');}