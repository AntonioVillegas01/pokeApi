const  searchSubstring = (nameKey, myArray) => {
    let finalArr = []
    for (let i=0; i < myArray.length; i++) {
        if (myArray[i].name.includes(nameKey)) {
            finalArr.push(myArray[i]) ;
        }
    }
    return finalArr
}

module.exports = {
    searchSubstring
}