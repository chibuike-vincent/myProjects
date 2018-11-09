
const Joi = require('joi')
const express = require('express')
const Router = express.Router()


const courses = [
  {id:1, name: 'Javascript'},
  {id:2, name: 'Html'},
  {id:3, name: 'Css'},
  {id:4, name: 'React'},
  {id:5, name: 'Node'},
]



// Router.get('/api/courses', (req, res) => {
//   res.send([1,2,3,4,5,6,7,8,9,0])
// });

// Router.get('/api/courses/:id', (req, res) => {
//   res.send(req.params.id)
// });

// api to get all the courses

Router.get('/', (req, res) => {
  res.send(courses)
});

// to get a single course from the available courses

Router.get('/:id', (req, res) => {
  const course = courses.find((cours) => cours.id === parseInt(req.params.id));
  if(!course) res.status(404).send('Course with such ID do not exist');
  res.send(course)
});





// To get more courses into our courses array "database" through postman.

// Router.post('/api/courses', (req, res) => {
//   const course = {
//     id: courses.length + 1,
//     name: req.body.name
//   }
//   courses.push(course)
//   res.send(course)
// });

// we can decide to validate what users input into the database yl trying to  post a course.

// Router.post('/', (req, res) => {
//   if(!req.body.name || req.body.name.length < 3){
//     res.status(400).send('Name is required and must be more than 3 characters')
//   return;
//   }
  
//   const course = {
//     id: courses.length + 1,
//     name: req.body.name,
//     title: req.body.title
//   }
//   courses.push(course)
//   res.send(course)
// });

// though the validation up still works, lets simplify our validation using joi

Router.post('/', (req, res) => {

  const schema = {
    name: Joi.string().min(3).required(),
    title: Joi.string().min(3).required()
  }
  const result = Joi.validate(req.body, schema)
  console.log(result)

  if(result.error){
        // res.status(400).send(result.error) //or
        res.status(400).send(result.error.details[0].message) // to select the particular message the user see instead of all messages.
      return;
      }
  
  const course = {
    id: courses.length + 1,
    name: req.body.name
  }
  courses.push(course)
  res.send(course)
});


// Updating our courses


Router.put('/:id', (req, res) => {
  // Look up the course
  // If not existing, return 404
  const course = courses.find((cours) => cours.id === parseInt(req.params.id));
  if(!course) res.status(404).send('Course with such ID do not exist');
  

  //validate;
  // if invilide, return 404-bad request

  const {error} = validatecourse(req.body)  
  console.log(error)
    
      if(error){
            // res.status(400).send(result.erro   r) //or
            res.status(400).send(error.details[0].message) // to select the particular message the user see instead of all messages.
            return;
      }
         

  // Update course
  course.name = req.body.name
  // Return the updated course
  res.send(course)
  
});


function validatecourse(course){
  const schema = {
    name: Joi.string().min(3).required()
  }
  return Joi.validate(course, schema)
}







  
  
  //to handle delete 
  
  Router.delete('/:id', (res, req) => {
    // const course = courses.find((cours) => cours.id === parseInt(req.params.id));
    // if(!course) res.status(404).send('Course with such ID do not exist');
  
    //delete
    const index = courses.indexOf(course);
    courses.splice(index, 1);
  
    res.send(index)
  })
  

  module.exports = Router