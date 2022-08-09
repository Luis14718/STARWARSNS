import apiClient from '../helpers/apiClient';

class DataService {// eslint-disable-next-line class-methods-use-this
  getAllDatas = (data) => apiClient().get(data);
}
export default new DataService();
