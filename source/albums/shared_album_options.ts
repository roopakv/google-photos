class SharedAlbumOptions {
  constructor(public isCollaborative: boolean, public isCommentable: boolean) { }

  toJson() {
    return {
      isCollaborative: this.isCollaborative,
      isCommentable: this.isCommentable
    };
  }
}

export = SharedAlbumOptions
