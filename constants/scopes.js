'use strict';

/**
 * Read more about scopes here:
 *   https://developers.google.com/photos/library/guides/authentication-authorization
 */
const SCOPES = {
  READ_ONLY: 'https://www.googleapis.com/auth/photoslibrary.readonly',
  APPEND_ONLY: 'https://www.googleapis.com/auth/photoslibrary.appendonly',
  READ_DEV_DATA: 'https://www.googleapis.com/auth/photoslibrary.readonly.appcreateddata',
  READ_AND_APPEND: 'https://www.googleapis.com/auth/photoslibrary',
  SHARING: 'https://www.googleapis.com/auth/photoslibrary.sharing',
};

module.exports = SCOPES;
