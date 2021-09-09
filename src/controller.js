const {Pool} = require('pg')
const os = require('os-utils')
const storage = require('node-persist')
var query = 'pokemon'
var cpuUsage  = 0
var ramUsage = 0

const pool = new Pool({
    host : 'localhost',
    user: 'postgres',
    password: 'admin',
    database: 'postgres',
    port: '5432'
})

setInterval(function setCPUAndRAMUsage() {
    os.cpuUsage(function(v){
        cpuUsage = v * 100
        ramUsage = os.freemem() / os.totalmem()
    });
   }, 5000);

const getCPURAMPorcentaje = (req,res)=>{
    console.log('GET /cpu and ram')
    res.status(200).json(`{"cpuUsage":${cpuUsage} %,"ramUsage":${ramUsage} %}`)
}

const getQuery = async (req,res)=>{
    await storage.init();
    query = await storage.getItem('query')
    console.log('GET /query')
    const response = await pool.query(`select * from ${query||'pokemon'};`)
    res.status(200).json(response.rows)
}

const getPokemons = async (req,res)=>{
    await storage.setItem('query','pokemon')
    console.log('GET /Pokemons')
    const response = await pool.query("select * from pokemon;")
    res.status(200).json(response.rows)
}

const getDinos = async (req,res)=>{
    await storage.setItem('query','dinorey')
    console.log('GET /Dinos')
    const response = await pool.query("select * from dinorey;")
    res.status(200).json(response.rows)
}

const getPokemonById = async (req,res)=>{
    console.log('GET /pokemonById')
    const response = await pool.query("select * from pokemon where id = $1;",[req.params.id])
    res.status(200).json(response.rows)
}

const createPokemons = async (req,res)=>{
    console.log('POST /pokemons')
    const {name, typePokemon} = req.body
    const response = await pool.query('insert into pokemon (name, typePokemon) values ($1, $2)', [name, typePokemon])
    console.log(req.body)
    res.status(200).json({
        message: 'pokemon succesfully registered',
        body:{
            pokemon:{name, typePokemon}
        }
    })
}

const deletePokemonById = async (req,res)=>{
    console.log('DELETE /pokemonById')
    const response = await pool.query("delete from pokemon where id = $1;",[req.params.id])
    res.status(200).json({
        message: 'pokemon with id '+req.params.id+' succesfully removed'
    })
}

const setPokemonById = async (req,res)=>{
    console.log('DELETE /pokemonById')
    const response = await pool.query("delete from pokemon where id = $1;",[req.params.id])
    res.status(200).json({
        message: 'pokemon with id '+req.params.id+' succesfully removed'
    })
}



module.exports = {
    getQuery,
    getPokemons,
    getDinos,
    createPokemons,
    getPokemonById,
    deletePokemonById,
    getCPURAMPorcentaje
}