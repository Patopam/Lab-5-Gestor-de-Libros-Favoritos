import React from 'react';
import { useSelector } from 'react-redux';
import BookItem from './BookItem';

const FavoriteList = () => {
	const { books = [], favorites = [] } = useSelector((state) => state.books || {});
	const favoriteBooks = (books && books.filter((book) => favorites.includes(book.id))) || [];

	return (
		<div>
			{favoriteBooks.length > 0 ? (
				favoriteBooks.map((book) => <BookItem key={book.id} book={book} isFavorite={true} />)
			) : (
				<p>No hay libros favoritos</p>
			)}
		</div>
	);
};

export default FavoriteList;
