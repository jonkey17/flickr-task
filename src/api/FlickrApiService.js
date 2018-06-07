import fetchJsonp from 'fetch-jsonp';

const getPhotos = (options) => {
  let url = 'https://api.flickr.com/services/feeds/photos_public.gne?format=json';
  if (options && options.tag) {
    url += '&tags=' + options.tag;
  }
  return fetchJsonp(url, {
    jsonpCallbackFunction: "jsonFlickrFeed"
  }).then(response => response.json());
}

export default {
  getPhotos
}