"use strict";
function domainName(url) {
  // Regex to remove everything but.
  // Still need to better understand Regex
  let solution = url
    .replace("www.", "")
    .replace("http://", "")
    .replace("https://", "")
    .replace(/\..*/, "");
  return solution;
}
domainName("http://www.zombie-bites.com");

// Best answer from Codewars
// *** Study this answer since it uses pure Regex ***
function domainName(url) {
  return url.match(/(?:http(?:s)?:\/\/)?(?:w{3}\.)?([^\.]+)/i)[1];
}
