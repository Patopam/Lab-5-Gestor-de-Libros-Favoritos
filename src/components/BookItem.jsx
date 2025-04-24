import { useDispatch } from 'react-redux';
import { toggleFavorite } from '../redux/book/bookSlides';

const BookItem = ({ book, isFavorite, title, author, year, synopsis }) => {
	const dispatch = useDispatch();

	const styleBook = {};
	return (
		<>
			<div>
				<h1>{book.title}</h1>
				<p>{book.author}</p>
				<p>{book.year}</p>
				<p>{book.category}</p>
				<button onClick={() => dispatch(toggleFavorite(book.id))}>
					{isFavorite ? 'Quitar de Favoritos' : 'Agregar a Favoritos'}
				</button>
			</div>
		</>
	);
};

export default BookItem;
