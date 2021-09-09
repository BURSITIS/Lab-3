ALTER USER postgres WITH PASSWORD 'admin';

CREATE TABLE pokemon(
    id SERIAL PRIMARY KEY,
    name VARCHAR(40),
    typePokemon TEXT
);

CREATE TABLE dinorey(
    id SERIAL PRIMARY KEY,
    name VARCHAR(40),
    typeDino TEXT,
    element TEXT
);


INSERT INTO pokemon(name,typePokemon) VALUES
    ('bulbasaur', 'planta/veneno'),
    ('ivyasur', 'planta/veneno'),
    ('venuasur', 'planta/veneno'),
    ('charmander', 'fuego'),
    ('charmeleon', 'fuego'),
    ('charizard', 'volador/fuego'),
    ('squirtle', 'agua'),
    ('wartortle', 'agua'),
    ('blastoise', 'agua');

INSERT INTO dinorey(name,typeDino, element) VALUES
    ('az', 'carnotaurus', 'viento'),
    ('gabu', 'triceratops', 'rayo'),
    ('paris', 'parasaurolophus', 'hierba');
