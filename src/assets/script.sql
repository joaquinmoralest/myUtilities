CREATE TABLE IF NOT EXISTS perfil(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nombre TEXT,
    apellido_paterno TEXT,
    apellido_materno TEXT,
    edad INT,
    genero TEXT,
    ocupacion TEXT,
    fono INT,
    correo TEXT,
    deporte_favorito TEXT,
    red_social TEXT,
    foto TEXT
);


INSERT OR IGNORE INTO perfil (id,nombre,apellido_paterno,apellido_materno,edad,genero,ocupacion,fono,correo,deporte_favorito,red_social,foto)
values (1,'Armando','Casas','Rojas',28,'M','Constructor civil',945690012,'armandocasasbuenas@gmail.com','Polo','@armandocasas', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png');

INSERT OR IGNORE INTO perfil (id,nombre,apellido_paterno,apellido_materno,edad,genero,ocupacion,fono,correo,deporte_favorito,red_social,foto)
values (2,'Elba','Lazo','Fuerte',20,'F','Policia',998127634,'Elbalazoseguro@gmail.com','Tiro al arco','@Elbalazo', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png');

INSERT OR IGNORE INTO perfil (id,nombre,apellido_paterno,apellido_materno,edad,genero,ocupacion,fono,correo,deporte_favorito,red_social,foto)
values (3,'Flores','Del campo','Lindo',38,'F','Jardinera',998540056,'Floresdc@gmail.com','Criquet','@Floresdelca', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png');

INSERT OR IGNORE INTO perfil (id,nombre,apellido_materno,apellido_paterno,edad,genero,ocupacion,fono,correo,deporte_favorito,red_social,foto)
values (4,'Helen','Chufe',' De paredes',38,'F','Electricista',956889943,'Helenchupa@gmail.com','Tenis','@Helectrica', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png');