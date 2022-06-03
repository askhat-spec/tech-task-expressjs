const express = require("express")
const app = express()
const router = require('./router');
const path = require("path")

const PORT = process.env.PORT || 80;

app.use('/image-service', router);

app.use(express.static(path.join(__dirname, 'converted')))

app.listen(PORT, () => {
    console.log('Server is running on PORT:', PORT);
});