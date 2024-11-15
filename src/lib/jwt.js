import jwt from 'jsonwebtoken';

const JWT_SECRET = 'my_jwt_password';

// This function creates a token (like a passport) for the user with their information
// The token is signed using a secret password so it can't be tampered with
export function encode(payload) {
    return jwt.sign(payload, JWT_SECRET);
}

// This function checks if the user's token is valid by verifying it with the secret password
// It extracts the user information from the token if it is valid
export function decode(token) {
    return jwt.verify(token, JWT_SECRET);
}