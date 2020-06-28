'use strict';

class Album {
  setId(id) {
    this.id = id;
    return this;
  }

  setTitle(title) {
    this.title = title;
    return this;
  }

  setProductUrl(productUrl) {
    this.productUrl = productUrl;
    return this;
  }

  setIsWriteable(isWriteable) {
    this.isWriteable = isWriteable;
    return this;
  }

  setTotalMediaItems(totalMediaItems) {
    this.totalMediaItems = totalMediaItems;
    return this;
  }

  setCoverPhotoBaseUrl(coverPhotoBaseUrl) {
    this.coverPhotoBaseUrl = coverPhotoBaseUrl;
    return this;
  }

  setShareInfo(shareInfo) {
    this.shareInfo = shareInfo;
    return this;
  }

  static albumForCreation(title) {
    return new Album().setTitle(title);
  }

  toJson() {
    return {
      id: this.id,
      title: this.title,
      isWriteable: this.isWriteable,
      coverPhotoBaseUrl: this.coverPhotoBaseUrl,
      totalMediaItems: this.totalMediaItems,
      productUrl: this.productUrl,
      shareInfo: this.shareInfo,
    };
  }
}

module.exports = Album;
