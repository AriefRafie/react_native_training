const express = require('express');
const app = express();
const books = [
	{
		id: 100,
		title: 'Golang Experts',
		author: 'John Stack',
		price: 200
	},
	{
		id: 101,
		title: 'C++ for beginners',
		author: 'John Doe',
		price: 250,
	},
	{
		id: 102,
		title: 'Flutter development',
		author: 'Steven Doe',
		price: 350
	},
	{
		id: 103,
		title: 'JavaScript internals',
		author: 'John Stack',
		price: 300
	},


];

const port = 5000;

app.get('/books', (req, res) => {
	res.json(books);
});

app.listen(port, () => {

	console.log(`Bookstore API is running at port ${port}`);
});

