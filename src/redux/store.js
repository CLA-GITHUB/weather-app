import { configureStore } from '@reduxjs/toolkit';
import weatherReducer from './dataSlice';
export default configureStore({
	reducer: {
		weatherData: weatherReducer
	}
});
