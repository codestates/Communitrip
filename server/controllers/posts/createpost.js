/** 게시물 생성 */
const { posts } = require('../../models')

module.exports = (req, res) => {
    posts.create({
        user_id: req.body.user_id,
        contents: req.body.contents,
        title: req.body.title,
        tag_id: req.body.tag_id,
        total_likes: 0,
        image: req.body.image,
        address: req.body.address,
        longitude: req.body.longitude,
        latitude: req.body.latitude,
    }).then((result) => {
        if (!result) {
            res.status(400).json({ message: '내용이 없어요' })
        } else {
            res.json({ message: '게시물 생성완료' })
        }
    }).catch((err) => {
        console.log(err)
        res.status(500).json({ message: '서버에 문제가 있네요' })
    })
}