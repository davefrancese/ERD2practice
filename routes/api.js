const express = require('express');
const queries = require('../database/queries')

const router = express.Router();

router.get('/', (req,res)=>{
  res.render('index')
})

router.post('/addMovie', (req,res)=>{
  let newMovie = req.body
  console.log(newMovie);
  queries.checkDirectors(newMovie)
  .then(data=>{
    if (data.length === 0) {
      queries.addDirector(newMovie)
      .then(newId=>{
        console.log(newId)
        queries.checkActor(newMovie)
        .then(data=>{
          if(data.length===0) {
            queries.addActor(newMovie)
            .then(actId=>{

            })
          }
        })
      })
    }

  })

})

module.exports = router
