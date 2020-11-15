import request from '@/utils/request';
import { APIConst } from '@/config';

const getUsers = async () => {

  const api = APIConst.getUsers.getUsers();
  const response = await request.call(api.url, {
    method: api.method
  });
  return response;
};

export default {
getUsers
};