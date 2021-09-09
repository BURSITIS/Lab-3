const{ Router } = require('express')
const router = Router()

const {getQuery, getPokemons, getDinos, createPokemons, getPokemonById, deletePokemonById, getCPURAMPorcentaje} = require ('./controller.js')

router.get('/', getQuery)
router.get('/pokemons', getPokemons)
router.get('/dinos', getDinos)
router.get('/cpuram', getCPURAMPorcentaje)
router.post('/pokemons', createPokemons)
router.get('/pokemons/:id', getPokemonById)
router.delete('/pokemons/:id', deletePokemonById)

module.exports = router