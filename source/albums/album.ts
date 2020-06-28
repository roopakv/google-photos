class Album {
  public id: string
  public title: string
  public productUrl: string
  public isWriteable: boolean
  public totalMediaItems: number
  public coverPhotoBaseUrl: string
  public shareInfo: object

  setId(id: string) {
    this.id = id;
    return this;
  }

  setTitle(title: string) {
    this.title = title;
    return this;
  }

  setProductUrl(productUrl: string) {
    this.productUrl = productUrl;
    return this;
  }

  setIsWriteable(isWriteable: boolean) {
    this.isWriteable = isWriteable;
    return this;
  }

  setTotalMediaItems(totalMediaItems: number) {
    this.totalMediaItems = totalMediaItems;
    return this;
  }

  setCoverPhotoBaseUrl(coverPhotoBaseUrl: string) {
    this.coverPhotoBaseUrl = coverPhotoBaseUrl;
    return this;
  }

  setShareInfo(shareInfo: object) {
    this.shareInfo = shareInfo;
    return this;
  }

  static albumForCreation(title: string) {
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
      shareInfo: this.shareInfo
    };
  }
}

export = Album
