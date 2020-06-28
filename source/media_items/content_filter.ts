class ContentFilter {

  public includedContentCategories = []
  public excludedContentCategories = []

  addIncludedContentCategories(category: string) {
    this.includedContentCategories.push(category);
  }

  addExcludedContentCategories(category: string) {
    this.excludedContentCategories.push(category);
  }

  toJSON() {
    return {
      includedContentCategories: this.includedContentCategories,
      excludedContentCategories: this.excludedContentCategories
    };
  }
}

export = ContentFilter;
