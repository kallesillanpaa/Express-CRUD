require('dotenv').config()
const express = require('express')
const app = express()
const port = process.env.PORT || 3333
//------------------------------------
app.set('view engine', 'ejs')

const num = 3

//ROUTES
app.get('/:queryString', (req, res) => {

    res.render('index', {
        data: {
            queryString: req.params.queryString
        },
        numero: num
    })
})
    //------------------------------------------------------------------------------------------------------------------
    app.listen(port, () => console.log(`Express started on http://localhost:${port} ` + `\npress Ctrl-C to terminate`));