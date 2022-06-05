fetch("https://icanhazdadjoke.com/slack")
  .then((data) => data.json())
  .then((arfinData) => {
    const arfinText = arfinData.attachments[0].text;
    const arfinElement = document.getElementById("arfinElement");

    arfinElement.innerHTML = arfinText;
  });
