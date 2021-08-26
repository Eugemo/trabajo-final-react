import client from '../rest/client';
import routes from '../rest/routes';


export const cargarLugares = async () => {
    try{
        const res = await client.get(routes.placesVaccine());
        return res;
    } catch (err) {
        console.log(err)
    }
}

export const lugarById = async ({id}) => {
    try {
        const res = await client.get(routes.placesByIdVaccine({id}));
        return res;
    } catch (err) {
        console.log(err)        
    }
}

// export const cambiaLugar = async ({data}) => {
//     try {
//         const res = await client.patch(routes.placesByIdVaccine({id}));
//         return  places.push({ ...places, data });
//     } catch (err) {
//         console.log(err)
//     }
// }

export const borrarLugar = async ({id}) => {
    try {
        const res = await client.delete(routes.placesByIdVaccine({id}));
        return res;
    } catch (err) {
        
    }
}

// export const crearLugar = async (data) => {
//     try {
//         const res = await client.post(routes.);
//         return  places.push({ ...places, data });
//     } catch (err) {
//         console.log(err)
//     }
// }
