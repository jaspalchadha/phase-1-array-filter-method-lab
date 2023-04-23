function findMatching(driver1, driver2) {
  return driver1.filter(
    (possibleMatch) => possibleMatch.toLowerCase() === driver2.toLowerCase()
  );
}

function fuzzyMatch(driver1, testString) {
  return driver1.filter(
    (possibleMatch) =>
      possibleMatch.toLowerCase().indexOf(testString.toLowerCase()) === 0
  );
}

function matchName(driver1, driver2Name) {
  return driver1.filter((record) => record.name === driver2Name);
}
