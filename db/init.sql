CREATE DATABASE transcription_db;

USE transcription_db;

CREATE TABLE transcriptions (
    id INT AUTO_INCREMENT PRIMARY KEY,
    content TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
