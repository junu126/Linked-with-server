require('dotenv').config();
const jwt = require('jsonwebtoken');
const {JWT_SECRET: secret} = process.env;

/**
 * @description 토큰 발급
 * @param {String} email
 */
exports.createToken = async (email) => {
    const payload = {
        email
    };
    
    const option = {
        expiresIn: '60 days',
        issuer: 'DGSW.HS.KR', // 발급자
        subject: 'token', // 토큰제목
    };

    try {
        const result = await jwt.sign(payload, secret, option);

        return result;
    } catch (error) {
        console.log(`[TOKEN] 토큰 발급 중 오류:\n${error}`);
        throw error;
    }
}

exports.verifyToken = async (token) => {
    try {
        const result = await jwt.verify(token, secret);
        console.log();
        return result;
    } catch (error) {
        console.log(`[TOKEN] 토큰 검증 오류 :\n${error}`);
        throw error;
    }
}