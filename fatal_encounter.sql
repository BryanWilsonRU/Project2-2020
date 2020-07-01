Create Table fatal_encounter(
"ID" INTEGER Primary Key,
"Age" INTEGER,
"Gender" VARCHAR(15),
"Race" VARCHAR(50),
"City" VARCHAR(100),
"State" VARCHAR(2),
"Latitude" DECIMAL,
"Longitude" DECIMAL,
"Cause_of_Death" VARCHAR(100),
"Mental_Illness" VARCHAR (30),
"Year" Integer
);

Select * from fatal_encounter;