/*@johnclaps3 + @leticiakasamale8*/

/*Users Table*/
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(100),
    wallet_id VARCHAR(42) UNIQUE NOT NULL,
    email VARCHAR(100) UNIQUE,
    licence_number VARCHAR UNIQUE,
    phone_number VARCHAR(20),
    pass_word VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

/*Transactions Table*/
CREATE TABLE transactions (
    id SERIAL PRIMARY KEY,
    user_id INT REFERENCES users(id),
    transaction_hash VARCHAR(66) UNIQUE NOT NULL,
    mineral_id INT REFERENCES minerals(id),
    quantity DECIMAL(18, 8),
    transaction_date TIMESTAMP NOT NULL,

    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
/*License Information Table*/
CREATE TABLE licenses (
    id SERIAL PRIMARY KEY,
    user_id INT REFERENCES users(id),
    license_number VARCHAR(100) UNIQUE NOT NULL,
    license_type VARCHAR(50),
    issued_date DATE,
    expiry_date DATE,
    status VARCHAR(50),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

/*Mienerals Information Table*/
CREATE TABLE minerals (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) UNIQUE NOT NULL,
    description TEXT,
    market_price DECIMAL(18, 2),
    unit VARCHAR(20),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

/*Regulatory Framework/polict Table/Relation*/
CREATE TABLE regulatory_framework (
    id SERIAL PRIMARY KEY,
    title VARCHAR(200),
    description TEXT,
    document_url VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);


/*Table Storing Transactions Related to each User/Mining Company*/
CREATE TABLE user_mineral_transactions (
    id SERIAL PRIMARY KEY,
    user_id INT REFERENCES users(id),
    mineral_id INT REFERENCES minerals(id),
    transaction_id INT REFERENCES transactions(id),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

/*Compliance Table*/
CREATE TABLE compliance (
    id SERIAL PRIMARY KEY,
    user_id INT REFERENCES users(id),
    regulatory_id INT REFERENCES regulatory_framework(id),
    compliance_status VARCHAR(50),
    compliance_date DATE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

/*Manage users relation schema*/
CREATE TABLE manage_users (
    id SERIAL PRIMARY KEY,              -- Unique identifier for each user
    name VARCHAR(100) NOT NULL,        -- User's full name
    email VARCHAR(100) NOT NULL UNIQUE, -- User's email address, must be unique
    role VARCHAR(50) NOT NULL,         -- User's role (e.g., admin, user, verifier)
    created_at TIMESTAMP DEFAULT NOW(), -- Timestamp when the user is created
    updated_at TIMESTAMP DEFAULT NOW()  -- Timestamp for last update
);

-- Optional: Create an index for quick lookups by email
CREATE INDEX idx_email ON manage_users(email);

-- Optional: Create a trigger to update the updated_at field on record updates
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW(); -- Set updated_at to the current timestamp
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER update_manage_users_updated_at
BEFORE UPDATE ON manage_users
FOR EACH ROW
EXECUTE FUNCTION update_updated_at_column();
