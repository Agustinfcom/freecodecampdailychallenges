/*
Navigator

On October 28, 1994, Netscape Navigator was released, helping millions explore the early web.

Given an array of browser commands you executed on Netscape Navigator, return the current page you are on after executing all the commands using the following rules:

    You always start on the "Home" page, which will not be included in the commands array.
    Valid commands are:
        "Visit Page": Where "Page" is the name of the page you are visiting. For example, "Visit About" takes you to the "About" page. When you visit a new page, make sure to discard any forward history you have.
        "Back": Takes you to the previous page in your history or stays on the current page if there isn't one.
        "Forward": Takes you forward in the history to the page you came from or stays on the current page if there isn't one.

For example, given ["Visit About Us", "Back", "Forward"], return "About Us".

 */
function navigate(commands) {
  let pageHistory = ["Home"];
  let historyIndex = 0;
  const validCommands = ["Back", "Forward"];
  for (let command of commands) {
    //if it is Back or Forward:
    if (validCommands.includes(command)) {
      if (command === "Back") {
        //if we are not at the back of the history
        if (historyIndex > 0) historyIndex--;
      } else {
        //if we are not at the last page of the history
        if (historyIndex < pageHistory.length - 1) historyIndex++;
      }
      //We are changing history
    } else {
      let page = command.replace("Visit", "").trim();
      //Clear forward history
      pageHistory = pageHistory.slice(0, historyIndex + 1);
      pageHistory.push(page);
      historyIndex++;
    }
  }
  return pageHistory[historyIndex];
}
