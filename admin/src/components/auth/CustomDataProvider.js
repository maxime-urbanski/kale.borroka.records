import { stringify } from 'querystring';
import axios from "axios";

const apiUrl = process.env.REACT_APP_BACK_URL;

const instance = axios.create({
  baseURL: apiUrl,
  headers: {
    Accept: "application/json",
    Authorization: `Bearer ${JSON.parse(localStorage.getItem('auth'))}`
  }
})

export const CustomDataProvider =  {
  getList: async (resource, params) => {
    const { page, perPage } = params.pagination;
    const { field, order } = params.sort;
    const query = {
      pagination: JSON.stringify([page, perPage]),
      sort: JSON.stringify([(page - 1) * perPage, page * perPage - 1]),
      filter: JSON.stringify(params.filter),
    };

    const url = `/${resource}?${stringify(query,"&")}`
    const fetchData = async () => {
      try {
        const response = await instance.get(url);
        return {
          data: await response.data.items ? await response.data.items : await response.data,
          total: await response.data.totalItems || 10
        }
      } catch (e) {
        throw new Response('Erreur lors de la récupération des données', e)
      }
    };
    return await fetchData();
  },
  getOne: async (resource, params) => {
    const url = `/${resource}/${params.id}`
    const fetchData = async () => {
      try {
        const response = await instance.get(url);
        return {
          data: await response.data
        }
      } catch (e) {
        throw new Error(e)
      }
    }
    return await fetchData();
  },
  getMany: async (resource, params) => {
    const query = {
    filter: JSON.stringify({ id: params.ids }),
    };
    const url = `/${resource}?${stringify(query)}`;
    const fetchData = async () => {
      try {
        const response = await instance.get(url);
        return {
          data: await response.data,
        }
      } catch (e) {
        throw new Error(e)
      }
    };
    return await fetchData();
  },
  update: async (resource, params) => {
    const { data } = params;
    const url = `/${resource}/${params.id}`;
    try {
      const postData = await instance.put(url, data)
      console.log("update ==>",await params.data)
      return {
        data: {
          id: await params.data.id,
          ...params.data
        }
      }
    } catch (e) {
      throw new Error(e)
    }
  }
}
