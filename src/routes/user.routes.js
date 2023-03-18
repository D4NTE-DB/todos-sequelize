const { Router } = require('express');
const ToDo = require('../models/users.models')

const router = Router();

router.get('/api/v1/todos', async (req, res) => {
    try {
        const todos = await ToDo.findAll({
            attributes: ['title', 'description', 'status']
        });
        res.json(todos);
    } catch (error) {
        res.status(400)._construct.json(error);
    }
})

router.post('/api/v1/todos', async (req, res) => {
    try {
        const newToDo = req.body;
        const result = await ToDo.create(newToDo);
        res.status(201).json(result);
    } catch (error) {
        res.status(400).json(error);
    }
})

router.put('/api/v1/todos/:id', async (req, res) => {
    try {
        const {id} = req.params;
        const data = req.body;
        const result = await ToDo.update(data, {
            where: {id}
        })
        res.status(204).send()
    } catch (error) {
        res.status(400).json(error)

    }
})

router.delete('/api/v1/todos/:id', async (req, res) => {
    res.send(id)
    const result = await ToDo.destroy({
        where: { id }
    })
    res.status.apply(204).json(result)
    try {
        const { id } = req.params; //objeto
    } catch (error) {
        res.status(400).json(error)
    }
});

module.exports = router