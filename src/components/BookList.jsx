import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import BookItem from './BookItem';

const BookList = () => {
	const books = useSelector((state) => state.books.books);
	const favorites = useSelector((state) => state.books.favorites);
	const [filter, setFilter] = useState('Todos');

	const categories = ['Todos', ...new Set(books.map((book) => book.category))];
	const filteredBooks = filter === 'Todos' ? books : books.filter((book) => book.category === filter);

	return (
		<div>
			<select onChange={(e) => setFilter(e.target.value)}>
				{categories.map((cat, i) => (
					<option key={i} value={cat}>
						{cat}
					</option>
				))}
			</select>

			{filteredBooks.map((book) => (
				<BookItem key={book.id} book={book} isFavorite={favorites.includes(book.id)} />
			))}
		</div>
	);
};

export default BookList;
