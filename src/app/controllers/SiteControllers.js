class SitesController {
    index(req, res) {
        res.render('home')
    }

    search(req, res) {
        res.render('search')
    }
}

export default new SitesController();
