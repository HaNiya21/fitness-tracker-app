const express = require('express');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const exjwt = require('express-jwt');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const secretKey = 'My secret key';
const jwtMW = exjwt({
    secret : secretKey,
    algorithms: ['HS256']
});

let users = [
    { id: 1, username: 'admin', password: 'admin' },
    { id: 2, username: 'user', password: 'user' }
];

app.post('/api/login', (req, res) => {
    const { username, password } = req.body;

    const user = users.find(user => user.username === username && user.password === password);
    if (user) {
        let token = jwt.sign({ id: user.id, username: user.username }, secretKey, { expiresIn: '24h' });
        res.json({ success: true, err: null, token });
    } else {
        res.status(401).json({ success: false, token: null, err: 'Username or password is incorrect' });
    }
});

app.use((err, req, res, next) => {
    if (err.name === 'UnauthorizedError') {
        res.status(401).json({ success: false, err: 'Invalid token' });
    } else {
        next(err);
    }
});

app.listen(5000, () => {
    console.log('Server running on port 5000');
});
