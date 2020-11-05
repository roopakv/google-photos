# googlephotos

Wrapper around the google photos API. The API reference can be found [here](https://developers.google.com/photos/library/reference/).

## Getting Started

Construct an object with the google auth token. All actions performed on this instance of photos
will use the auth token the object was constructed with. Read the section below on getting an authtoken
with the required scopes.

```js
const Photos = require('googlephotos');

const photos = new Photos(your_google_auth_token);
```

### Authentication

This package doesn't authentication itself. We suggest using the official
[google nodejs library](https://www.npmjs.com/package/googleapis). Here are their [instructions](https://www.npmjs.com/package/googleapis#oauth2-client).

Use the library to get the auth token for the scopes you will need. Read [this](https://developers.google.com/photos/library/guides/authentication-authorization) to figure out what
scopes you will need.

The scopes are available on the `Photos` object to make your life easier.

| Quick access                                                                                                    | Scope                                                                 | Use                                                                                                    |
| --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------ |
| `Photos.Scopes.READ_ONLY`                                                                                       | https://www.googleapis.com/auth/photoslibrary.readonly                | Only reading information. Sharing information is returned only if the token has sharing scope as well. |
| `Photos.Scopes.APPEND_ONLY`                                                                                     | https://www.googleapis.com/auth/photoslibrary.appendonly              | Only add photos, create albums in the user's collection. No sort of read access.                       |
| `Photos.Scopes.READ_DEV_DATA`                                                                                   | https://www.googleapis.com/auth/photoslibrary.readonly.appcreateddata | Read access to media items and albums created by the developer. Use this with write only.              |
| `Photos.Scopes.READ_AND_APPEND`                                                                                 | https://www.googleapis.com/auth/photoslibrary                         | Access to read and write only. No sharing information can be accessed.                                 |
| `Photos.Scopes.SHARING | https://www.googleapis.com/auth/photoslibrary.sharing | Access to sharing information. |

You can figure out your client id, secret and redirect url by going to the
[Google Cloud Console](https://console.developers.google.com/apis/credentials) and navigating to
APIs -> Credentials.

```js
const {google} = require('googleapis');
const Photos = require('googlephotos');

const oauth2Client = new google.auth.OAuth2(YOUR_CLIENT_ID, YOUR_CLIENT_SECRET, YOUR_REDIRECT_URL);

const scopes = [Photos.Scopes.READ_ONLY, Photos.Scopes.SHARING];

const url = oauth2Client.generateAuthUrl({
  // 'online' (default) or 'offline' (gets refresh_token)
  access_type: 'offline',

  // If you only need one scope you can pass it as a string
  scope: scopes,
});

// Send the user to the url from above. Once they grant access they will be redirected to the
// the redirect URL above with a query param code in the redirect. Use the code below to get the
// access token.

const {tokens} = await oauth2Client.getToken(code);

// The token from above can be used to initialize the photos library.
```

## Albums

### list

The default page size used is 50 and pageToken is ignored if not passed in.

```js
const response = await photos.albums.list(pageSize, pageToken);
// const response = await photos.albums.list(pageSize);
// doSomethingWithResponse(response);
```

### get

```js
const response = await photos.albums.get(albumId);
// doSomethingWithResponse(response);
```

### create

```js
const response = await photos.albums.create('Your Album Title');
// doSomethingWithResponse(response);
```

### addEnrichment

The addEnrichment call either accepts a JSON you construct, or you can use the Enrichment helper
classes as part of this module to construct an enrichment.

```js
const albumPosition = new photos.AlbumPosition(photos.AlbumPosition.POSITIONS.FIRST_IN_ALBUM);
const textEnrichment = new photos.TextEnrichment('some text');
const response = await photos.albums.addEnrichment(albumId, textEnrichment, albumPosition);
```

Or with plain JSON

```js
const albumPosition = {
  position: 'FIRST_IN_ALBUM',
};
const textEnrichment = {
  textEnrichment: {
    text: 'Some Text',
  },
};
const response = await photos.albums.addEnrichment(albumId, textEnrichment, albumPosition);
```

## Shared Albums

### list

Default pageSize is 50 and pageToken is optional.

```js
const response = await photos.sharedAlbums.list(pageSize, pageToken);
// doSomethingWithResponse(response);
```

### join

```js
const response = await photos.sharedAlbums.join(shareToken);
// doSomethingWithResponse(response);
```

## MediaItems

### get

```js
const response = await photos.mediaItems.get(mediaItemId);
// doSomethingWithResponse(response);
```

### upload

```js
const response = await photos.mediaItems.upload(albumId, fileName, filePath, description);
// doSomethingWithResponse(response);
```

### uploadMultiple

Supports uploading an array of file objects at once from a single directory, file descriptions are optional.
Supports an optional requestDelay, which pauses execution for the specified time (milliseconds) after 50 requests to google photos `upload` api.
This is to prevent the api from rejecting requests for making too many requests per minute.

```js
const files = [
  {name: 'myself.jpg', description: 'any description you want'},
  {name: 'someone-else.png'},
];

const requestDelay = 1000;

const response = await photos.mediaItems.upload(albumId, files, directoryPath, requestDelay);
// doSomethingWithResponse(response);
```

### search

A search can either fetch the contents of an album or search with filters. Either way default page
size is 50.

#### Searching with an album ID

```js
const response = await photos.mediaItems.search(albumId, optionalPageSize, optionalPageToken);
// doSomethingWithResponse(response);
```

### Searching with filters.

```js
const filters = new photos.Filters(includeArchivedMedia);

// Adding a date filter.
const dateFilter = new photos.DateFilter();
dateFilter.addDate(new Date('2018/05/15'));
dateFilter.addDate(moment());
dateFilter.addRange(moment().subtract(10, 'days'), moment().subtract(5, 'days'));
filters.setDateFilter(dateFilter);

// Adding a content filter.
const contentFilter = new photos.ContentFilter();
contentFilter.addIncludedContentCategories(photos.ContentCategory.BIRTHDAYS);
contentFilter.addExcludedContentCategories(photos.ContentCategory.CITYSCAPES);
filters.setContentFilter(contentFilter);

// Adding a media type filter filter (all, video or photo)
const mediaTypeFilter = new photos.MediaTypeFilter(photos.MediaType.ALL_MEDIA);
filters.setMediaTypeFilter(mediaTypeFilter);

const optionalPageSize = 20;

const response = photos.mediaItems.search(filters, optionalPageSize);
// doSomethingWithResponse(response);
```
