
function sortedCharacters(characters){
    characters.sort((a, b) => b.health - a.health);
    return characters
}

module.exports = {
    sortedCharacters
}