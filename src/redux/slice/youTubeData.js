import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  searchResults: [],
  isLoading: false,
  error: null,
};

export const fetchSearchResults = createAsyncThunk(
  'youtube/fetchSearchResults',
  async () => {
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '345900ee59msh7c0deba68a260cap1ba235jsna38becc7594c',
        'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
      }
    };
  
    const response = await fetch('https://youtube-v31.p.rapidapi.com/search?relatedToVideoId=7ghhRHRP6t4&part=id%2Csnippet&type=video&maxResults=50', options);
  
    if (!response.ok) {
      throw new Error('Failed to fetch search results.');
    }
  
    const data = await response.json();
    
    return await data;
  }
);

const youtubeSlice = createSlice({
  name: 'youtube',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSearchResults.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchSearchResults.fulfilled, (state, action) => {
        state.isLoading = false;
        state.searchResults = action.payload;
      })
      .addCase(fetchSearchResults.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export default youtubeSlice.reducer;
