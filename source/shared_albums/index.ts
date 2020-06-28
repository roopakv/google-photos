import Transport from '../transport';
import constants from '../constants/shared_albums'

class SharedAlbums {
  constructor(private transport: Transport) { }

  get(shareToken: string) {
    return this.transport.get(`${constants.BASE_PATH}/${shareToken}`);
  }

  join(shareToken: string) {
    return this.transport.post(`${constants.BASE_PATH}:join`, { shareToken });
  }

  leave(shareToken: string) {
    return this.transport.post(`${constants.BASE_PATH}:leave`, { shareToken });
  }

  list(pageSize = 50, pageToken: string) {
    return this.transport.get(constants.BASE_PATH, { pageSize, pageToken });
  }
}

export = SharedAlbums;
