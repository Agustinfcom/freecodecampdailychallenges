/*
Speak Wisely, You Must

Given a sentence, return a version of it that sounds like advice from a wise teacher using the following rules:

    Words are separated by a single space.
    Find the first occurrence of one of the following words in the sentence: "have", "must", "are", "will", "can".
    Move all words before and including that word to the end of the sentence and:
        Preserve the order of the words when you move them.
        Make them all lowercase.
        And add a comma and space before them.
    Capitalize the first letter of the new first word of the sentence.
    All given sentences will end with a single punctuation mark. Keep the original punctuation of the sentence and move it to the end of the new sentence.
    Return the new sentence, make sure there's a single space between each word and no spaces at the beginning or end of the sentence.

For example, given "You must speak wisely." return "Speak wisely, you must."
*/

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
