var express = require('express')

let app = express()

app.get('/toolchain',function(req,res){
	res.send("Hello from Toolchain")
})

app.listen(3000, () => {console.log("Server is listening to port 3000")})