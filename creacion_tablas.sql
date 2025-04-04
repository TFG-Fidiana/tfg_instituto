create table
    profesor (
        id_profesor auto_increment primary key,
        dni varchar2 (10) unique not null,
        nombre varchar2 (50) not null,
        apellidos varchar2 (100) not null,
        usuario varchar2 (50) unique not null,
        password_hash varchar2 (255) not null,
        email varchar2 (500),
        telefono varchar2 (10),
        habilitado char(1) not null
    );

create table
    ciclo (
        id_ciclo auto_increment primary key,
        nivel varchar2 (3),
        curso varchar2 (10)
    );

create table
    grupo (
        id_grupo auto_increment,
        id_ciclo int,
        primary key (id_grupo, id_ciclo),
        foreign key (id_ciclo) references ciclo (id_ciclo)
    );

create table
    alumno (
        id_alumno auto_increment primary key,
        dni varchar2 (10) unique not null,
        nombre varchar2 (50) not null,
        apellidos varchar2 (100) not null,
        direccion varchar2 (200),
        apto char(1),
        grupo_id int,
        foreign key (curso_id) references grupo (id_grupo)
    );

create table
    convenio (
        id_convenio auto_increment primary key,
        f_inicio date,
        f_fin date,
        estado varchar2 (20),
        horario varchar2 (1000),
        horas_diarias decimal(6, 2),
        horas_semanales decimal(6, 2)
    );

create table
    lugar (
        id_lugar auto_increment primary key,
        n_identificacion varchar2 (10),
        direccion varchar2 (200),
        telefono varchar2 (15),
        email varchar2 (50),
        c_postal number (5),
        localidad varchar2 (20),
        n_plazas_totales number (4),
        n_plazas_disponibles number (4),
        tipo_lugar ENUM ('empresa', 'centro') not null
    );