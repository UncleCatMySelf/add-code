import { Base } from '../../utils/base.js';

class Home extends Base {
  constructor() {
    super();
  }

  getMyFriend(name,callback){
    var params = {
      url: 'friend/my_friend',
      data: {
        'name': name
      },
      sCallback: function (data) {
        callback && callback(data);
      }
    }
    this.request(params);
  }

}

export { Home };