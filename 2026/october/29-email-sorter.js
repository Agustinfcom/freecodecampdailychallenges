/*
Email Sorter

On October 29, 1971, the first email ever was sent, introducing the username@domain format we still use. Now, there are billions of email addresses.

In this challenge, you are given a list of email addresses and need to sort them alphabetically by domain name first (the part after the @), and username second (the part before the @).

    Sorting should be case-insensitive.
    If more than one email has the same domain, sort them by their username.
    Return an array of the sorted addresses.
    Returned addresses should retain their original case.

For example, given ["jill@mail.com", "john@example.com", "jane@example.com"], return ["jane@example.com", "john@example.com", "jill@mail.com"].
*/

function sort(emails) {
  let sortedEmails = emails.sort(function (a, b) {
    let asplit = a.toLowerCase().split("@");
    let bsplit = b.toLowerCase().split("@");
    if (asplit[1] === bsplit[1]) {
      if (asplit[0] > bsplit[0]) {
        return 1;
      }
      if (asplit[0] < bsplit[0]) {
        return -1;
      } else return 0;
    } else {
      if (asplit[1] > bsplit[1]) {
        return 1;
      }
      if (asplit[1] < bsplit[1]) {
        return -1;
      } else return 0;
    }
  });
  return sortedEmails;
}
