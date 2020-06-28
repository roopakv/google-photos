class ContributerInfo {
  constructor(public profilePictureBaseUrl: string, public displayName: string) { }

  setProfilePictureBaseUrl(profilePictureBaseUrl: string) {
    this.profilePictureBaseUrl = profilePictureBaseUrl;
    return this;
  }

  setDisplayName(displayName: string) {
    this.displayName = displayName;
    return this;
  }

  toJSON() {
    return {
      profilePictureBaseUrl: this.profilePictureBaseUrl,
      displayName: this.displayName
    };
  }
}

export = ContributerInfo
