import React from 'react';
import { useSelector } from 'react-redux';
import BookItem from './BookItem';

const FavoriteList = () => {
	const { books, favorites } = useSelector((state) => state.books);
	const favoriteBooks = books.filter((book) => favorites.includes(book.id));

	return (
		<div>
			{favoriteBooks.map((book) => (
				<BookItem key={book.id} book={book} isFavorite={true} />
			))}
		</div>
	);
};

export default FavoriteList;
