import FlicrApiService from './';

import FlickrApiResponseMock from './FlickrApiResponseMock';

describe('FlicrApiService', () => {
  beforeEach(() => {
    jest.resetModules();
  });

  test('Api Service has getPhotos function', () => {
    expect(FlicrApiService.getPhotos).toBeDefined();
  });
});