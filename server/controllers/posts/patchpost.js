/** 게시글 수정 */
const { posts } = require('../../models')

module.exports = (req, res) => {
    posts.update({
        title: result.dataValues.title,
        image: result.dataValues.image,
        contents: result.dataValues.contents,
    }, {
        where: {
            id: req.params.postId
        }
    }).then((result) => {
        res.json({ message: '수정 완료' })
    }).catch((err) => {
        console.log(err)
        res.status(500).json({ message: '서버에 문제가 있네요' })
    })
}