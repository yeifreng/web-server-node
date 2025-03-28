
const {envs} = require('./config/env')
const {startServer} = require('./server/server.js')

const main = () =>{
    startServer({
        port: envs.PORT,
        public_path: envs.PUBLIC_PATH
    })
}

//Funcion agnostica autoconvocada
// es agnostica porque no tiene nombre
//es autoconvocada porque la ejecutamos con los parentesis
(async () =>{
    main()
})()
