const mainRouter = require('./routes/main');
const userRouter = require('./routes/user');

    //4-4. request router
    .all('*', function(req, res, next) {
        res.locals.req = req;
        res.locals.res = res;
        next();
    });

// .use('/', mainRouter)
// .use('/user', userRouter);

