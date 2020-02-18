//json server connected with axios
import axios from 'axios';


export default axios.create({
  baseURL: 'http://localhost:3001'
});