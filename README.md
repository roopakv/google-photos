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

```
const response = await photos.albums.list();
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

#### textEnrichment

```

```
