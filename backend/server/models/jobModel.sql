CREATE TABLE jobs (
    id SERIAL PRIMARY KEY NOT NULL,
    role VARCHAR NOT NULL,
    role_link VARCHAR,
    city VARCHAR NOT NULL,
    state VARCHAR,
    country VARCHAR NOT NULL,
    company VARCHAR NOT NULL,
    company_link VARCHAR,
    description VARCHAR NOT NULL,
    connections VARCHAR [],
    status VARCHAR NOT NULL,
    applied_on DATE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- INSERT INTO jobs (role, role_link, city, state, country, company, company_link, description, connections, status, applied_on, created_at) 
-- VALUES ('Software Engineer', 'https://www.accenture.com/us-en/careers/jobdetails?id=R00120688_en&title=Federal+-+Software+Engineer+Analyst', 'New York', 'NY', 'USA', 'Accenture', 'https://accenture.com', 'bla bla', '{"Charles", "Emma", "Oscar"}', 'Applied', '2022-12-02', '2017-05-25 17:39:15.014961-05');

-- INSERT INTO jobs (role, role_link, city, state, country, company, company_link, description, connections, status, applied_on, created_at) 
-- VALUES ('Software Engineer II', 'https://www.whoop.com/careers', 'Boston', 'MA', 'USA', 'Whoop', 'https://whoop.com', 'healthy', '{"Sasha", "Jake", "Pauline"}', 'To Apply', null, '2017-05-25 17:39:15.014961-05');

-- INSERT INTO jobs (role, role_link, city, state, country, company, company_link, description, connections, status, applied_on) 
-- VALUES ('Software Engineer II', 'https://www.whoop.com/careers', 'Boston', 'MA', 'USA', 'Whoop', 'https://whoop.com', 'healthy', '{"Sasha", "Jake", "Pauline"}', 'To Apply', null);
