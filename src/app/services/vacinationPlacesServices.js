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

export const editarLugar = async (places, data) => {
    try {
        console.log('***')
        console.log(places)
        console.log(data)
        const res = await client.patch(routes.placesByIdVaccine(places.id));
        return  places.push({ ...places, data });
    } catch (err) {
        console.log(err)
    }
}

export const borrarLugar = async (id) => {
    try {
        const res = await client.delete(routes.placesByIdVaccine(id));
        return res;
    } catch (err) {
        
    }
}

export const crearLugar = async (places, placeData) => {
    try {
        const res = await client.post(routes.placesVaccine(places));
        return  places.push({ ...places, placeData });
    } catch (err) {
        console.log(err)
    }
}
