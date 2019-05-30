create table User (
    id int not null auto_increment unique,
    username varchar(255),
    password varchar(255),
    primary key(id)
);

create table Video (
    id int not null auto_increment unique,
    views int unsigned default 0,
    title varchar(255),
    width int unsigned,
    height int unsigned,
    user_id int,
    source_path varchar(255),
    primary key(id),
    foreign key(user_id) references User(id)
);

---------------------- Example Data ---------------------------

-- Users
insert into User (username, password) values ('user1', 'pass1');
insert into User (username, password) values ('user2', 'pass2');
insert into User (username, password) values ('user3', 'pass3');
insert into User (username, password) values ('user4', 'pass4');
insert into User (username, password) values ('user5', 'pass5');

-- User 1 videos
insert into Video (title, width, height, user_id, source_path) 
values ('User 1 video 1', 1920, 1080, 1, '/videos/user1/video\ 1');
insert into Video (title, width, height, user_id, source_path) 
values ('User 1 video 2', 1920, 1080, 1, '/videos/user1/video\ 2');
insert into Video (title, width, height, user_id, source_path) 
values ('User 1 video 3', 1920, 1080, 1, '/videos/user1/video\ 3');
insert into Video (title, width, height, user_id, source_path) 
values ('User 1 video 4', 1920, 1080, 1, '/videos/user1/video\ 4');

-- User 2 videos
insert into Video (title, width, height, user_id, source_path) 
values ('User 2 video 1', 1920, 1080, 2, '/videos/user2/video\ 1');
insert into Video (title, width, height, user_id, source_path) 
values ('User 2 video 2', 1920, 1080, 2, '/videos/user2/video\ 2');
insert into Video (title, width, height, user_id, source_path) 
values ('User 2 video 3', 1920, 1080, 2, '/videos/user2/video\ 3');
insert into Video (title, width, height, user_id, source_path) 
values ('User 2 video 4', 1920, 1080, 2, '/videos/user2/video\ 4');

-- User 3 videos
insert into Video (title, width, height, user_id, source_path) 
values ('User 3 video 1', 1920, 1080, 3, '/videos/user3/video\ 1');

-- User 4 videos
insert into Video (title, width, height, user_id, source_path) 
values ('User 4 video 1', 1920, 1080, 4, '/videos/user4/video\ 1');
insert into Video (title, width, height, user_id, source_path) 
values ('User 4 video 2', 1920, 1080, 4, '/videos/user4/video\ 2');
insert into Video (title, width, height, user_id, source_path) 
values ('User 4 video 3', 1920, 1080, 4, '/videos/user4/video\ 3');

-- user 5 videos
insert into Video (title, width, height, user_id, source_path) 
values ('User 5 video 1', 1920, 1080, 5, '/videos/user5/video\ 1');
insert into Video (title, width, height, user_id, source_path) 
values ('User 5 video 2', 1920, 1080, 5, '/videos/user5/video\ 2');
