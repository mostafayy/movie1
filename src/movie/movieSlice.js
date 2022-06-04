import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import MovieApi from "../common/api/MovieApi"
import {APIKey} from '../common/api/MovieApiKey'
export const fetchAsyncMovies=createAsyncThunk(
    "movies/fetchAsyncMovies", async(term)=>{
        
        const response =await MovieApi.get(
            `?apikey=${APIKey}&s=${term}&type=movie`);
            // console.log(response)
            return (response.data);
        }
        );
        export const fetchAsyncShows = createAsyncThunk(
            "movies/fetchAsyncShows",async (term) => {
  
 const response = await MovieApi.get(
 `?apiKey=${APIKey}&s=${term}&type=series`
          );
                    // console.log(response)
                    return response.data;
    }
  );
        export const fetchAsyncDetails = createAsyncThunk(
      "movies/fetchAsyncDetails",async (id) => {
  
 const response = await MovieApi.get(
 `?apiKey=${APIKey}&i=${id}&Plot=full`);
//  console.log(response.data)
 return response.data;
    }
  );


const initialState={
    movies:{},
    shows:{},
    details:{},
}  
const movieSlice=createSlice({
    name:"movies",
initialState,
reducers:{
    removeSelectedOrShow:(state)=>{
        state.SelectedOrShow={};
    }
},
extraReducers:{
   
    [fetchAsyncMovies.pending]: () => {
        console.log("Pending");
      },
      [fetchAsyncMovies.fulfilled]: (state, { payload }) => {
        console.log("Fetched Successfully!");
        return { ...state, movies: payload };
      },
      [fetchAsyncMovies.rejected]: () => {
        console.log("Rejected!");
      },
      [fetchAsyncShows.fulfilled]: (state, { payload }) => {
        console.log("Fetched Successfully!");
        return { ...state, shows: payload };
      },
      [fetchAsyncDetails.fulfilled]: (state, { payload }) => {
        console.log("Fetched Successfully!");
        return { ...state, details: payload };
      },
},
})
export const {removeSelectedOrShow} =movieSlice.actions;
export const getAllMovies=(state)=> state.movies
export const getAllShows=(state)=> state.shows
export const getAllDetails=(state)=> state.movies.details
export default movieSlice.reducer;