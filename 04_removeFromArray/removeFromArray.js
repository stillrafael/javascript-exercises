const removeFromArray = function(objectSequence, ...toRemove) {
    let where
    let counter = 0
    if (toRemove.length > 1) {
       while (toRemove.length > counter) {
      
        where = objectSequence.indexOf(toRemove[counter])
        if (where == -1){
            counter++
            continue
        }
        objectSequence.splice(where, 1)
        counter++
       }
    }
    else {
        where = objectSequence.indexOf(toRemove[0])
        objectSequence.splice(where, 1) 
    }
    return objectSequence
    
};

// Do not edit below this line
module.exports = removeFromArray;
