import { configureStore } from '@reduxjs/toolkit';
import youtubeReducer from './slice/youTubeData';

export default configureStore({
  reducer: {
    youtube: youtubeReducer,
  },
});