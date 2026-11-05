document.getElementById("generateBtn").addEventListener("click", async () => {

  const grammar =
    document.getElementById("grammar").value;

  const result =
    document.getElementById("result");

  try {

    result.textContent = "生成中...";

    const res = await fetch(
      "https://tight-sound-508a.uematsu-piano.workers.dev",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          grammar
        })
      }
    );

    const data = await res.json();

    result.textContent =
`英文:
${data.english}

和訳:
${data.japanese}

解説:
${data.explanation}`;

  } catch (e) {

    result.textContent =
      "ERROR: " + e.message;

  }

});
