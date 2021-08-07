import { stringify } from 'querystring';
import axios from "axios";

const apiUrl = "http://localhost:5050/api";

export default {
  getList: async (resource, params) => {
    console.log(params)
    const { page, perPage } = params.pagination;
    const { field, order } = params.sort;
    const query = {
      pagination: JSON.stringify([page, perPage]),
      sort: JSON.stringify([(page - 1) * perPage, page * perPage - 1]),
      filter: JSON.stringify(params.filter),
    }

    const url = `${apiUrl}/${resource}?${stringify(query)}`
    console.log(url);

    const fetchData = async () => {
      try {
        const response = await axios.get(url);
        return {
          data: await response.data.items,
          total: await response.data.totalItems
        }
      } catch (e) {
        throw new Response('Erreur lors de la récupération des données', e)
      }
    };
    return await fetchData();
  }
}
