const { tags, posts } = require('../../models')

module.exports = (req, res) => {
    tags.findOne({
        where: {
            id: req.params.tagId
        }
    }).then((result) => {
        if (!result) {
            res.status(400).json({ message: '태그에 맞는 게시글이 없어요' })
        } else {
            posts.findAll({
                attributes: {
                    exclude: ['userId']
                },
                where: {
                    id: result.dataValues.post_id
                }
            }).then((results) => {
                res.json({ results })
            }).catch((err) => {
                console.log(err)
                res.status(500).json({ message: '서버에 문제가 있네요' })
            })
        }
    })
}