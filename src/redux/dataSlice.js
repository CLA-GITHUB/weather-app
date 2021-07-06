import { createSlice } from '@reduxjs/toolkit';

export const dataSlice = createSlice({
	name: 'weatherData',
	initialState: {
		weatherData: {}
	},
	reducers: {
		fetchWeatherData: (state, action) => {
			return {
				...state,
				weatherData: {
					data: action.payload
				}
			};
		},
		clearData: (state) => {
			return {
				...state,
				weatherData: {}
			};
		}
	}
});

export const { fetchWeatherData, clearData } = dataSlice.actions;
export default dataSlice.reducer;
