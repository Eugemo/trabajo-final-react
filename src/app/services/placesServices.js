import routes from '../rest/routes';
import places from '../rest/places';
import axios from 'axios';


export const getPlaces = async () => {
    try {
        const placesVac = await axios
        .get(`${url}/places`)
        .catch((e) => console.log(e))
    return placesVac.data;
    } catch (error) {
        return { message: 'Error', error}
    }      
}


// const url = process.env.REACT_APP_API_BASE_URL;

// export const getPlaces = async () => {
//   try {
//     const places = await axios
//       .get(`${url}/places`)
//       .catch((e) => console.log(e));
//     return places.data;
//   } catch (error) {
//     return { message: 'error', error };
//   }
// };

// export const getPlacesById = async (id) => {
//   try {
//     const places = await axios
//       .get(`${url}/places/${id}`)
//       .catch((e) => console.log(e));
//     return places.data;
//   } catch (error) {
//     return { message: 'error', error };
//   }
// };

// export const patchPlace = async (data) => {
//   try {    
//     await axios
//       .patch(`${url}/places`, data)
//       .catch((e) => console.log(e));
//     return 'ok';
//   } catch (error) {
//     return { message: 'error', error };
//   }
// };

// export const deletePlacesById = async (id) => {
//   try {
//     let response = '';
//     await axios
//       .delete(`${url}/places/${id}`)
//       .then((a) => (response = 'ok'))
//       .catch((e) => (response = 'error'));

//     return response;
//   } catch (error) {
//     return { message: 'error', error };
//   }
// };

// export const postPlace = async (data) => {
//   try {
//     const savedPlace = await axios
//       .post(`${url}/places`, data)
//       .catch((e) => console.log(e));

//     return savedPlace;
//   } catch (error) {
//     return { message: 'error', error };
//   }
// };