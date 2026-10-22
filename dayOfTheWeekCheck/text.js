const carouselText = [
    { text: "Monday?", color: "red" },
    { text: "Tueday?", color: "orange" },
    { text: "Wednesday?", color: "yellow" },
    { text: "Thursday?", color: "green" },
    { text: "Friday?", color: "blue" },
    { text: "Saturday?", color: "purple" },
    { text: "Sunday?", color: "red" },
  ];
  
  $(document).ready(async function () {
    carousel(carouselText, "#feature-text");
  });
  
  async function typeSentece(sentence, eleRef, delay = 100) {
    const letters = sentence.split("");
    let i = 0;
    while (i < letters.length) {
      await waitForMs(delay);
      $(eleRef).append(letters[i]);
      i++
    }
    return;
  }
  
  async function deleteSentence(eleRef) {
    const sentence = $(eleRef).html();
    const letters = sentence.split("");
    let i = 0;
    while (letters.length > 0) {
      await waitForMs(100);
      letters.pop;
      $(eleRef).html(letters.join(""));
    }
  }
  
  async function carousel(carouselList, eleRef) {
    var i = 0;
    while (true) {
      updateFontColor(eleRef, carouselList[i].color);
      await typeSentece(carouselList[i].text, eleRef);
      await waitForMs(1500);
      await deleteSentence(eleRef);
      await waitForMs(500);
      i++;
      if (i >= carouselList.length) {
        i = 0;
      }
    }
  }