const db = require('../../models');
const jwt = require('../../lib/token');
const colorConsole = require('../../lib/console');

exports.sign = async(req, res) => {
    try {
        await db.User.createUser(req.body);

        const result = {
            status: 200,
            message: '회원가입 성공!'
        };

        res.status(200).json(result);
    } catch (error) {
        colorConsole.red(error);
        
        const result = {
            status: 500,
            message: '서버 에러!'
          };
      
          res.status(500).json(result);
    }
}

exports.login = async(req, res) => {
    const { email, password } = req.body;

    if(!email) {
        const result = {
            status: 400,
            message: '아이디를 입력하세요',
        }

        res.status(400).json(result);

        return;
    }

    if(!password) { 
        const result = {
          status: 400,
          message: '패스워드를 입력하세요',
        }
    
        res.status(400).json(result);
    
        return;
    }

    const user = await db.User.checkUser(email);

    if(!user.password == password) {
        const result = {
            status: 400,
            message: '패스워드를 확인하세요',
        }

        res.status(400).json(result);

        return;
    } else {
        const token = await jwt.createToken(email);

        const result = {
            status: 200,
            acessToken: token,
        }

        res.status(200).json(result);
    }
}

exports.addstar = async(req, res) => {
    try {
        const { opponentEmail, starScore } = req.body;

        const user = await db.User.checkUser(opponentEmail);

        if(!user) {
            const result = {
                status: 400,
                message: '유저 이메일정보를 확인해주세요.'
            }

            res.status(400).json(result);

            return;
        }
        
        await db.User.patchStar(opponentEmail, starScore);

        const result = {
            status: 200,
            message: '별점 부여 성공!'
        }

        res.status(200).json(result);
    } catch (error) {
        colorConsole.red(error);

        const result = {
            status: 500,
            message: '서버 에러!'
        }

        res.status(500).json(result);
    }
}