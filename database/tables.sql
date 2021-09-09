
--INGRESAR A ADMIN POKEMON CON COMANDO 'psql -d pokemons -U adminPokemon'

CREATE TABLE pokemon(
    id SERIAL PRIMARY KEY,
    name VARCHAR(40),
    typePokemon TEXT
);

INSERT INTO pokemon(name,typePokemon) VALUES
    ('charizard', 'dragon/fuego'),
    ('squirtle', 'agua'),
    ('bulbasur', 'planta');

COMMIT;