const express = require('express')
const mongoose = require('mongoose')

const app = express();

mongoose.connect('mongodb+srv://josephinemary200802:josephine@cluster0.9ae9sbp.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
    dbName: "blog"
}).then(() => console.log("DB CONNECTED"))
    .catch(err => console.log(err))

app.listen(5000, () => {
    console.log("SERVER STARTED")
})