import jwt from 'jsonwebtoken';

const JWT_SECRET = 'my_jwt_password';


/**
 * Encodes the payload into a JWT token.
 * @param {Object} payload - The data to encode in the token.
 * @returns {string} - The generated JWT token.
 */
export function encode(payload) {
    return jwt.sign(payload, JWT_SECRET);
}

/**
 * Decodes and verifies a JWT token.
 * @param {string} token - The token to decode and verify.
 * @returns {Object} - The decoded payload if the token is valid.
 */
export function decode(token) {
    return jwt.verify(token, JWT_SECRET);
}