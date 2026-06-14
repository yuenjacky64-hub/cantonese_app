const fs = require('fs');
const filePath = 'src/data/lessons.ts';

let content = fs.readFileSync(filePath, 'utf8');

// A very quick replacement for the very first section to have some REAL Cantonese words to show the user
content = content.replace(/cantonese: 'Kumusta\?'/, "cantonese: 'Nei hou?'");
content = content.replace(/cantonese: 'Kumusta ka na\?'/, "cantonese: 'Nei hou ma?'");
content = content.replace(/cantonese: 'Mabuti'/, "cantonese: 'Hou'");
content = content.replace(/cantonese: 'Mabuti naman ako\.'/ , "cantonese: 'Ngo hou hou.'");
content = content.replace(/cantonese: 'Salamat'/, "cantonese: 'Mgoi / Do ze'");
content = content.replace(/cantonese: 'Maraming salamat sa tulong\.'/ , "cantonese: 'Do ze nei ge bong mong.'");
content = content.replace(/cantonese: 'Walang anuman'/, "cantonese: 'Mh sai hak hei'");
content = content.replace(/cantonese: 'Magandang umaga'/, "cantonese: 'Jou san'");

fs.writeFileSync(filePath, content, 'utf8');
console.log("Lessons updated.");
