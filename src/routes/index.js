import newRouter from "../routes/news.js";
import siteRouter from "../routes/site.js";

function route(app) {
    app.use('/news', newRouter)
    app.use('/', siteRouter)

}

export default route;