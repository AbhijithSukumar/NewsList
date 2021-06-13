import BaseApi from './BaseApi';

class NewsApi extends BaseApi{
    getNewsList(){
       // alert('i am in');        
        return this.publicApi().get()
               .then(res=>res.data)
               .catch((error)=>{
                   throw error;
               });
    }
}
const newsApi=new NewsApi();
export default newsApi;