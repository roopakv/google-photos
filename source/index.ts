import Albums from './albums';
import SharedAlbums from './shared_albums';
import MediaItems from './media_items';

import TextEnrichment from './albums/text_enrichment';
import MapEnrichment from './albums/map_enrichment';
import LocationEnrichment from './albums/location_enrichment';
import Location from './albums/location';
import AlbumPosition from './albums/album_position';
import Transport from './transport';

import { CONTENT_CATEGORY, MEDIA_TYPE } from './constants/media_items';
import SCOPES from './constants/scopes';
import DateFilter from './common/date_filter';
import ContentFilter from './media_items/content_filter';
import MediaTypeFilter from './media_items/media_type_filter';
import Filters from './media_items/filters';

class Photos {
  public readonly transport: Transport
  public readonly albums: Albums
  public readonly sharedAlbums: SharedAlbums
  public readonly mediaItems: MediaItems
  public readonly Location = Location
  public readonly TextEnrichment = TextEnrichment
  public readonly MapEnrichment = MapEnrichment
  public readonly LocationEnrichment = LocationEnrichment
  public readonly AlbumPosition = AlbumPosition
  public readonly ContentCategory = CONTENT_CATEGORY
  public readonly MediaType = MEDIA_TYPE
  public readonly DateFilter = DateFilter
  public readonly ContentFilter = ContentFilter
  public readonly MediaTypeFilter = MediaTypeFilter
  public readonly Filters = Filters
  public static Scopes = SCOPES

  constructor(authToken: string) {
    if (typeof authToken !== "string") {
      throw new TypeError(`Expected a string, got ${typeof authToken}`)
    }

    this.transport = new Transport(authToken);
    this.albums = new Albums(this.transport);
    this.sharedAlbums = new SharedAlbums(this.transport);
    this.mediaItems = new MediaItems(this.transport);
  }
}

export = Photos
