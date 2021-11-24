import axios from 'axios';

const apiUrl = process.env.REACT_APP_BACK_URL;
const token = localStorage.getItem('auth');

export const instance = axios.create({
  baseURL: apiUrl,
  headers: {
    Accept: 'application/json',
    Authorization: token ? `Bearer ${token}` : '',
  },
});

export const CustomDataProvider = {
  getList: async (resource, params) => {
    const { page, perPage } = params.pagination;

    const url = `/${resource}?page=${page - 1}&perPage=${perPage}`;
    try {
      const response = await instance.get(url);
      return {
        data: await response.data.items ? await response.data.items : await response.data,
        total: await response.data.totalItems || 10,
      };
    } catch (e) {
      throw new Response('Erreur lors de la récupération des données', e);
    }
  },
  getOne: async (resource, params) => {
    const url = `/${resource}/${params.id}`;
    try {
      const response = await instance.get(url);
      return {
        data: {id: params.id, ...await response.data},
      };
    } catch (e) {
      throw new Error(e);
    }
  },
  getMany: async (resource, params) => {
    const url = `/${resource}/${params.ids[0]}`;
    try {
      const response = await instance.get(url);
      return {
        data: [await response.data],
      };
    } catch (e) {
      throw new Error(e);
    }
  },
  update: async (resource, params) => {
    const { data } = params;
    const url = `/${resource}/${params.id}`;
    try {
      await instance.put(url, data);
      return {
        data: {
          id: await params.data.id,
          ...params.data,
        },
      };
    } catch (e) {
      throw new Error(e);
    }
  },
  create: async (resource, params) => {
    const url = `/${resource}`;
    const { data } = params;
    try {
      const postData = await instance.post(url, data);
      return {
        data: {
          id: await postData.data.id,
          ...postData.data,
        },
      };
    } catch (e) {
      throw new Error(e);
    }
  },
  delete: async (resource, params) => {
    const url = `/${resource}/${params.id}`;
    try {
      const deleteData = await instance.delete(url);
      return {
        data: deleteData.data,
      };
    } catch (e) {
      throw new Error(e);
    }
  },
  deleteMany: async (resource, params) => {
    const url = `/${resource}/${params.ids}`;
    try {
      const response = await instance.delete(url);
      return {
        data: [...await response.data],
      };
    } catch (e) {
      throw new Error(e);
    }
  },
};
