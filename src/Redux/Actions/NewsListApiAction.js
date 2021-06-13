import newsApi from '../../Api/NewsApi';

/**
 * Login to Api with Email/Password
 */
export function GetList() {
  return (dispatch) =>
    new Promise(async (resolve, reject) => {
      // Go to Api
      return newsApi
        .getNewsList()
        .then(async (response) => {
          return resolve(dispatch({type: 'NEWS_LIST', data: response}));
        })
        .catch(async (err) => {
          return resolve(
            dispatch({
              type: 'NEWS_LIST_ERROR',
              data: err,
            }),
          );
        });
    }).catch(async (err) => {
      throw err;
    });
}
