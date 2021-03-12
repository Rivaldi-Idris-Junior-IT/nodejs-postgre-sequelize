const express = require('express');
const db = require('../Config/Database');
const model = require('../Models/Berita');

const Berita = {}

Berita.getall = async(req, res) => {
    model.findAll()
    .then(berita => {
        console.log(berita);
        res.sendStatus(200)
    })
    .catch(err => console.log(err));
}

module.exports = Berita;
