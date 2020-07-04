drop table gender;

create table gender (
"ID" Serial Primary Key,
"Gender" varchar(50),
"counts" int
);

select * from gender;

drop table age;

create table age(
"ID" Serial Primary Key,
"Age" int,
"counts" int
);

select * from age;

drop table states;

create table states(
"ID" Serial Primary Key,
"State" varchar(2),
"counts" int
);

select * from states;

drop table cause_of_death;

create table cause_of_death(
"ID" Serial Primary Key,
"Cause_of_Death" varchar(100),
"counts" int
);

select * from cause_of_death;

drop table mental_illness;

create table mental_illness(
"ID" Serial Primary Key,
"Mental_Illness" varchar(100),
"counts" int
);

select * from mental_illness;

drop table years;

create table years(
"ID" Serial Primary Key,
"Year" int,
"counts" int
);

select * from years;