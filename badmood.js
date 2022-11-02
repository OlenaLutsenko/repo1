const express = require('express')
const app = express()
const port = 8080

app.get('/song', (req, res) => {
    res.redirect('https://www.youtube.com/watch?v=gnPxKZUyTJo')
})

const badChoice = [
    "Recollect AZOVSTAL",
    "Make 1000 exersises",
    "Clean your place and PC",
    "Write a log",
    "Think, thar your ancestors survived for 2,6 M years ",
    "Recollect 242 days of Donetsk airport defence"   
]

app.get('/badChoice', (req, res) => {
    var random_badChoice = badChoice[Math.floor(Math.random()*badChoice.length)]
    res.send(random_badChoice)
})

const noHope = [
    "Have a coffe with cream",
    "Go for a long wolk",
    "Play with cats",
    "Sew something - hole or a button"      
]

app.get('/noHope', (req, res) => {
    var random_noHope = noHope[Math.floor(Math.random()*noHope.length)]
    res.send(random_noHope)
})

const wantDrink = [
    "Take 2+2+2+2 valerianna pills",
    "Get bath with cup of coffe",
    "Run 10 km",
    "Learn English"       
]

app.get('/wantDrink', (req, res) => {
    var random_wantDrink = wantDrink[Math.floor(Math.random()*wantDrink.length)]
    res.send(random_wantDrink)
})

const tired = [
    "Read in bed",
    "Color pictures in coloring book",
    "Open the window",
    "Learn French"    
]

app.get('/tired', (req, res) => {
    var random_tired = tired[Math.floor(Math.random()*tired.length)]
    res.send(random_tired)
})


app.get('/explanation', (req, res) => {
        res.send('Why this approach works? We called it DEPRESSIVE CONSULTING FOR DEPRESSIVE PEOPLE OR PEOPLE IN BAD MOOD. If person is already depressive, the positive recomendations can seem to them irrelevant. It seems strange that some people advise them something for healing state about what they don\'t know.')
})


app.get('/picture', (req, res) => {
    res.redirect('https://www.pexels.com/search/mood/')
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${8080}`)
})