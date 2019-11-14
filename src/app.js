const path = require('path')
const express = require('express')

const app = express()
const PORT = process.env.PORT || 3000;

const publicDirectoryPath = path.join(__dirname,'../public')
app.use(express.static(publicDirectoryPath))

app.get('', (req, res) => {
    res.send('index.html')
})
//===============================
app.get('*', (req, res) => {
    res.send('notFound')
})
//===============================

app.listen(PORT, () => {
    console.log('Server mo o port 3000')
})
