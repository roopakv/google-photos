import DateFilter from '../common/date_filter';
import MediaTypeFilter from './media_type_filter';
import ContentFilter from './content_filter';

class Filters {
  public dateFilter: DateFilter
  public contentFilter: ContentFilter
  public mediaTypeFilter: MediaTypeFilter

  constructor(public includeArchivedMedia = false) { }

  setDateFilter(dateFilter: DateFilter) {
    this.dateFilter = dateFilter;
    return this;
  }

  setContentFilter(contentFilter: ContentFilter) {
    this.contentFilter = contentFilter;
    return this;
  }

  setMediaTypeFilter(mediaTypeFilter: MediaTypeFilter) {
    this.mediaTypeFilter = mediaTypeFilter;
    return this;
  }

  setIncludeArchivedMedia(includeArchivedMedia) {
    this.includeArchivedMedia = includeArchivedMedia;
    return this;
  }

  toJSON() {
    return {
      dateFilter:
        this.dateFilter instanceof DateFilter ? this.dateFilter.toJSON() : this.dateFilter,
      mediaTypeFilter:
        this.mediaTypeFilter instanceof MediaTypeFilter
          ? this.mediaTypeFilter.toJSON()
          : this.mediaTypeFilter,
      contentFilter:
        this.contentFilter instanceof ContentFilter
          ? this.contentFilter.toJSON()
          : this.contentFilter,
      includeArchivedMedia: this.includeArchivedMedia
    };
  }
}

export = Filters
