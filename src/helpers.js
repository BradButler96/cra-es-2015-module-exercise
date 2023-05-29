import React from 'react'

const choice = (items) => {
    const choiceIdx = Math.floor(Math.random() * items.length)
    return items[choiceIdx]
}

const remove = (items, item) => {
    const rmIdx = items.indexOf(item)
    if (rmIdx != -1) {
        items.splice(rmIdx, 1);
        return items
    } 
}

export { choice, remove }