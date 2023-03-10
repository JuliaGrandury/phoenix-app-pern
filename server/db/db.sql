CREATE DATABASE phoenixapp;

CREATE TABLE jobs (
    id SERIAL PRIMARY KEY NOT NULL,
    role VARCHAR NOT NULL,
    role_link VARCHAR,
    city VARCHAR,
    state_abbr VARCHAR,
    country VARCHAR,
    workstyle VARCHAR,
    company VARCHAR NOT NULL,
    description VARCHAR,
    connections VARCHAR[],
    app_status VARCHAR,
    applied_on DATE,
    priority INT NOT NULL check(priority >= 1 and priority <=5),
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- EXAMPLE INSERTIONS
INSERT INTO jobs (role, role_link, role_description, city, state_abbr, country, workstyle, company, connections, app_status, applied_on, priority) 
VALUES ('Software Engineer', 'google.com', 'Denver', 'Colorado', 'USA', 'Remote', 'Strava', '{"Nina Jones", "Louis Poletti"}', 'Applied', '3/31/2022', 1);

INSERT INTO jobs (role, role_link, role_description, city, state_abbr, country, workstyle, company, connections, app_status, applied_on, priority) 
VALUES ('Software Engineer', 'google.com', 'Brisbane', '', 'Australia', 'Hybrid', 'Brisbane Conservancy', '{"Timmy Jones", "John Trumpet"}', 'Applied', '3/29/2022', 4);


CREATE TABLE companies (
    id SERIAL PRIMARY KEY,
    name VARCHAR,
    website VARCHAR,
    description VARCHAR,
    founding_date DATE,
    founders VARCHAR[],
    status VARCHAR,
    size VARCHAR,
);