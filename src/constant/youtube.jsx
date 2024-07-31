// export const ApI_key = "AIzaSyC8GHeNSKl_a9NZs6PTMdW1iW8krl1XB_I";
// export const ApI_key = "AIzaSyCVQO45Zk6N1kuDcfwV9a-r4Ky82YLKz-Q";
// export const ApI_key = "AIzaSyCKIYHU1IkB8-bABKC8rGrEwjm9Z_5Iz88";
// export const ApI_key = "AIzaSyCTj8YmGWvFIMl9CMO2x-xqRDmBLKm--2w";
// export const ApI_key = "AIzaSyDjNx7ud_tLlqlo_-fDqDmwtc3qdOj3Rc0";
export const ApI_key = "AIzaSyBRdnkR2BtuomdH0cgvcXDpyLjuBrzI0pc";
export const BASE_URL = "https://www.googleapis.com/youtube/v3";
export const YOUTUBE_VIDEO_API = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&locale=in&maxResults=50&regionCode=in&key=${ApI_key}`;
// export const SEARCH_SUGGESTIONS_API = `http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=`;
// export const SEARCH_SUGGESTIONS_API = `https://suggestqueries.google.com/complete/search?client=youtube&q=`;

export const value_converter = (value) => {
  if (value === undefined) {
    return "N/A"; // or throw an error
  }
  if (value >= 1000000) {
    return (value / 1000000).toFixed(1) + "M";
  } else if (value >= 1000) {
    return (value / 1000).toFixed(1) + "k";
  } else {
    return value.toString();
  }
};
