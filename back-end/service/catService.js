const uuid = require("uuid");
const catRepository = require('../repository/catRepository');

module.exports.getAllcats = () => {
    const catList = catRepository.readJSONFile();
    return catList;
}

module.exports.addcat = (newcat) => {
    const catList = catRepository.readJSONFile();
    newcat.id=uuid.v4.apply();
    catList.push(newcat);
    catRepository.writeJSONFile(catList)
    return newcat;
}

module.exports.updatecat = (catID, catName, catImg) => {
    const catList = catRepository.readJSONFile();
  
    let foundcat=null;
    for (let i=0; i<catList.length; i++) 
        if (catList[i].id === catID) {
            catList[i].name = catName;
            catList[i].img = catImg;
            foundcat=catList[i];
            break;
        }
  
    catRepository.writeJSONFile(catList);
    return foundcat;
}

module.exports.removecat = (id) => {
    const catList = catRepository.readJSONFile();
    
    for (let i=0; i<catList.length; i++) 
        if (catList[i].id===id) {
            catList.splice(i, 1);  //  remove cat
            foundcat=catList[i];
            break;
        }
    
    catRepository.writeJSONFile(catList);
    return foundcat;
}