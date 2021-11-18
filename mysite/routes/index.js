const errorRoute = require('./error');

const applicationRouter = {
    setup: function(application) {

        // const site = models.Site.findOne();

        application
            .all('*', function(req, res, next) {  
                res.locals.req = req;
                res.locals.res = res;                 //.ejs 파일에서 <% res.변수 %>를 사용할 수 있게 하는 코드
                next();                               //next()를 해야 다음으로 넘어감 (필수)
            })

            .use('/', require('./main'))
            .use('/user', require('./user'))

            //에러페이지 라우팅
            .use(errorRoute.error404)
            .use(errorRoute.error500)

            .siteTitle = 'MySite';                    //전역선언
    }
}


//exports 작업
module.exports = { applicationRouter }

// 같은 코드 (구조 분해 destructing)
// module.exports = {
//     applicationRouter: applicationRouter
// }


