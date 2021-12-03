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
    red_social TEXT

);
INSERT OR IGNORE INTO perfil (id,nombre,apellido_paterno,apellido_materno,edad,genero,ocupacion,fono,correo,deporte_favorito,red_social)
values (1,'Armando','Casas','Rojas',28,'M','Constructor civil',945690012,'armandocasasbuenas@gmail.com','Polo','@armandocasas');

INSERT OR IGNORE INTO perfil (id,nombre,apellido_paterno,apellido_materno,edad,genero,ocupacion,fono,correo,deporte_favorito,red_social)
values (2,'Elba','Lazo','Fuerte',20,'F','Policia',998127634,'Elbalazoseguro@gmail.com','Tiro al arco','@Elbalazo');

INSERT OR IGNORE INTO perfil (id,nombre,apellido_paterno,apellido_materno,edad,genero,ocupacion,fono,correo,deporte_favorito,red_social)
values (3,'Flores','Del campo','Lindo',38,'F','Jardinera',998540056,'Floresdc@gmail.com','Criquet','@Floresdelca');

INSERT OR IGNORE INTO perfil (id,nombre,apellido_materno,apellido_paterno,edad,genero,ocupacion,fono,correo,deporte_favorito,red_social)
values (4,'Helen','Chufe',' De paredes',38,'F','Electricista',956889943,'Helenchupa@gmail.com','Tenis','@Helectrica');
