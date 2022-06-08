require('dotenv').config()

const { PORT = 3001, DATABASE_URL } = process.env

const express = require('express')

const app = express()

const mongoose = require('mongoose')

const cors = require('cors')

mongoose.connect(DATABASE_URL)

mongoose.connection
  .on('open', () => console.log('open'))
  .on('close', () => console.log('close'))
  .on('error', (error) => console.log(error))

const ArtistSchema = new mongoose.Schema({
  name: String,
  neighborhood: String,
  bio: String,
  profilePic: String,
})

const Artist = mongoose.model('Artist', ArtistSchema)

app.use(cors())
app.use(express.json())

// test route
app.get('/', (req, res) => {
  res.send('welcome to locallery where your neighbor is the artist')
})

app.listen(PORT, () => console.log(`${PORT}`))