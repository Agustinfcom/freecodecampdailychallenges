function wiseSpeak(sentence) {
  const mainWords = ["have", "must", "are", "will", "can"];
  var cleanSentence = sentence.toLowerCase().slice(0, -1);
  var sentenceWords = cleanSentence.split(" ");
  const punctuation = sentence.at(-1);
  var finalSentence = "";
  for (var i in sentenceWords) {
    if (mainWords.includes(sentenceWords[i])) {
      finalSentence = sentenceWords.slice(Number(i) + 1).join(" ");
      finalSentence += ",";
      finalSentence += " " + sentenceWords.slice(0, Number(i) + 1).join(" ");
      finalSentence += punctuation;
      finalSentence =
        finalSentence.charAt(0).toUpperCase() + finalSentence.slice(1);
      console.log(finalSentence);
      return finalSentence.trim();
    }
  }
}
