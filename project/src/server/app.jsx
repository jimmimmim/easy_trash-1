var oauthRouter = require('./oauth');

var app = express();

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/oauth', oauthRouter);

module.exports = app;