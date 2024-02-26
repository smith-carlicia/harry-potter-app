export default {
    theAPI: function(){
      return axios.get("https://randomuser.me/api/?results=200&nat=us")
    }
 };