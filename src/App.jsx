import { useState } from 'react';
import './App.css';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import BookItem from './components/BookItem';
import FavoriteList from './components/FavoriteList';
import BookList from './components/BookList';

function App() {
	const [count, setCount] = useState(0);

	return (
		<Provider store={store}>
			<h1>Book List</h1>
			<BookList></BookList>
			<h1>Favorite Books</h1>
			<FavoriteList></FavoriteList>
		</Provider>
	);
}

export default App;
