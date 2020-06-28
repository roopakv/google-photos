'use strict';

class ContentFilter {
  constructor() {
    this.includedContentCategories = [];
    this.excludedContentCategories = [];
  }

  addIncludedContentCategories(cat) {
    this.includedContentCategories.push(cat);
  }

  addExcludedContentCategories(cat) {
    this.excludedContentCategories.push(cat);
  }

  toJSON() {
    return {
      includedContentCategories: this.includedContentCategories,
      excludedContentCategories: this.excludedContentCategories,
    };
  }
}

module.exports = ContentFilter;
