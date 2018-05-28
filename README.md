# google-photos

Wrapper around the google photos API. The API reference can be found [here](https://developers.google.com/photos/library/reference/).

## Getting Started

Construct an object with the google auth token. All actions performed on this instance of photos
will use the auth token the object was constructed with. This lib doesn't yet take care of getting
the auth token with the required scopes (coming soon).

```
const Photos = require('googlephotos');

...

const photos = new Photos(your_google_auth_token);
```

## Albums

### list

The default page size used is 50 and pageToken is ignored if not passed in.

```
const response = await photos.albums.list(pageSize, pageToken);
// const response = await photos.albums.list(pageSize);
doSomethingWithResponse(response);
```

### get

```
const response = await photos.albums.get(albumId);
doSomethingWithResponse(response);
```

### create

```
const response = await photos.albums.create('Your Album Title');
doSomethingWithResponse(response);
```

### addEnrichment

The addEnrichment call either accepts a JSON you construct, or you can use the Enrichment helper
classes as part of this module to construct an enrichment.

```
const albumPosition = new photos.AlbumPosition(photos.AlbumPosition.POSITIONS.FIRST_IN_ALBUM);
const textEnrichment = new photos.TextEnrichment('some text')
const response = await photos.albums.addEnrichment(albumId, textEnrichment, albumPosition);
```

Or with plain JSON

```
const albumPosition = {
  position: 'FIRST_IN_ALBUM'
};
const textEnrichment = {
  textEnrichment: {
    text: 'Some Text'
  }
};
const response = await photos.albums.addEnrichment(albumId, textEnrichment, albumPosition);
```

## Shared Albums

### list

Default pageSize is 50 and pageToken is optional.

```
const response = await photos.sharedAlbums.list(pageSize, pageToken);
doSomethingWithResponse(response);
```

### join

```
const response = await photos.sharedAlbums.join(shareToken);
doSomethingWithResponse(response);
```

## MediaItems

### get

```
const response = await photos.mediaItems.get(mediaItemId);
doSomethingWithResponse(response);
```

### search

A search can either fetch the contents of an album or search with filters. Either way default page
size is 50.

#### Searching with an album ID

```
const response = await photos.mediaItems.search(albumId, optionalPageSize, optionalPageToken);
doSomethingWithResponse(response);
```

### Searching with filters.

```
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
doSomethingWithResponse(response);
```
