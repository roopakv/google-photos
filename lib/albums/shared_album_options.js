'use strict';

class SharedAlbumOptions {
  constructor(isCollaborative, isCommentable) {
    this.isCollaborative = isCollaborative;
    this.isCommentable = isCommentable;
  }

  toJson() {
    return {
      isCollaborative: this.isCollaborative,
      isCommentable: this.isCommentable,
    };
  }
}

module.exports = SharedAlbumOptions;
