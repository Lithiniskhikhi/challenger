const Users = require('./Users')
const Orders = require('./Orders')
const Books = require('./Books')
const BookAuthors = require('./BookAuthor')
module.exports = {
    users: new Users(),
    books: new Books(),
    authors: new BookAuthors(),
    orders: new Orders()

}
