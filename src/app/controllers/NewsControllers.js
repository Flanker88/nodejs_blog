class NewsController {
    index(req, res) {
        res.render('news')
    }

    show(req, res) {
        res.send('Details!')
    }
}

export default new NewsController();
