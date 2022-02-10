const { query } = require('express');
const Boards = require('../models/boards');

/**
 * Details about the stage
 * 1: TODO
 * 2: In Progress
 * 3: Completed
 */

const insertOne = (title, stage = 1) => {
    return Boards.create({
        title,
        stage,
    })
}

const findAll = () => {
    return Boards.findAll()
}

const update = (item, query) => {
    return Boards.update(item, query)
}

module.exports = {
    insertOne,
    findAll,
    update
}

