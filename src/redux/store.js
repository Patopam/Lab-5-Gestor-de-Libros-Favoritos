import { configureStore } from '@reduxjs/toolkit';
import booksReducer from './book/bookSlides';

export const store = configureStore({
	reducer: {
		books: booksReducer,
	},
});
