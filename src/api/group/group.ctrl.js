const db = require('../../models');
const colorConsole = require('../../lib/console');

exports.list = async(req, res) => {
    try {
        const count = await db.Group.cnt();        
        const countList = 12;

        var totalPage = count / countList;

        if(count % countList > 0) {
            totalPage++;
        }

        
    } catch (error) {
        colorConsole.red(result);

        const result = {
            status: 500,
            message: '서버 에러'
        }

        res.status(500).json(result);
    }
}

exports.join = async(req, res) => {
    try {
        const { id } = req.params;
        const user = req.user;

        const item = await db.Group.joinBuying(id, user);

        const result = {
            status: 200,
            data: item,
        }

        res.status(200).json(result);
    } catch (error) {
        colorConsole.red(error);

        const result = {
            status: 500,
            message: '서버 에러'
        }

        res.status(500).json(result);
    }
}

exports.getItem = async(req, res) => {
    try {
        const { id } = req.params;

        const item = await db.Group.oneItem(id);

        console.log(item);
    } catch (error) {
        colorConsole.red(error);

        const result = {
            status: 500,
            message: '서버 에러!'
        }

        res.status(500).json(result);
    }
}

exports.upload = async(req, res) => {

}

exports.photo = async(req, res) => {
    try {    
        let id = req.params;
        let imageElement = req.file;
        let path = String(imageElement.path).split('public');
        path = path[1];    
        
        await db.Group.photoUpload(id, path);

        const result = {
            status: 200,
            message: '사진 변경 성공',
        };

        res.status(200).json(result);
    } catch (error) {
        colorConsole.red(error);

        const result = {
            status: 500,
            message: '서버에러!'
        }

        res.status(500).json(result);
    }
}

exports.recommendlist = async(req, res) => {

}