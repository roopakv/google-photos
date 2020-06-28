'use strict';

class ContributerInfo {
  constructor(profilePictureBaseUrl, displayName) {
    this.profilePictureBaseUrl = profilePictureBaseUrl;
    this.displayName = displayName;
  }

  setProfilePictureBaseUrl(profilePictureBaseUrl) {
    this.profilePictureBaseUrl = profilePictureBaseUrl;
    return this;
  }

  setDisplayName(displayName) {
    this.displayName = displayName;
    return this;
  }

  toJSON() {
    return {
      profilePictureBaseUrl: this.profilePictureBaseUrl,
      displayName: this.displayName,
    };
  }
}

module.exports = ContributerInfo;
