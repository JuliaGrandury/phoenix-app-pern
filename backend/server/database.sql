CREATE DATABASE phoenixapp;

CREATE TABLE jobs (
    id SERIAL PRIMARY KEY,
    jobTitle TEXT NOT NULLABLE,
    jobLink TEXT NOT NULLABLE,
    jobCity VARCHAR NOT NULLABLE,
    jobCountry VARCHAR NOT NULLABLE,
    companyName TEXT NOT NULLABLE,
    companyUrl TEXT NOT NULLABLE,
    companyDesc VARCHAR NOT NULLABLE,
    -- connections: ['Henry Amestoy', 'Kate Wild'],
    -- connectionStatus: 'Active',
    -- connectionDate: '2022-09-28',
    appStatus TEXT NOT NULLABLE,
    appDate DATE NOT NULLABLE,
    createdAt timestamp NOT NULLABLE
);

CREATE TABLE users (
    id SERIAL PRIMARY KEY NOT NULLABLE,
    username TEXT NOT NULLABLE,
    email TEXT NOT NULLABLE,
    password TEXT NOT NULLABLE,
    UNIQUE (userName),
    createdAt timestamp NOT NULLABLE
);


-- add indexing to jobTitle, jobLocation, companyName and appStatus
-- think of structure for network
-- each person would have an associated job title, company, date of call, origin, transcript
    -- did they offer Mock Interview, Referral, Connect to Network, Resume Advice
    -- connections to other users
