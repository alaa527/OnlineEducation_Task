const express = require('express')
const app = express()
const cors=require('cors')
const studentRoute=require("./modules/students/routes/student.route")
app.use(express.json());
const port = 4000
app.get('/', (req, res) => res.send('Hello World!'))
app.use(cors())
app.use(studentRoute)
app.listen(port, () => console.log(`Example app listening on port ${port}!`))
