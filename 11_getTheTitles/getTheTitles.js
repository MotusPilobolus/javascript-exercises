const getTheTitles = function(books) {
var titleList = [];
for (const book of books) { titleList.push(book.title) }
return titleList;
};

// Do not edit below this line
module.exports = getTheTitles;
