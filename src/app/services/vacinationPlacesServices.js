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

export const lugarById = async (id) => {
    try {
        const res = await client.get(routes.placesByIdVaccine(id));
        return res;
    } catch (err) {
        console.log(err)        
    }
}

export const editarLugar = async (id, place) => {
    try {
        console.log('***')
        console.log(id)
        console.log(place)
        const res = await client.patch(routes.placesByIdVaccine(id));
        // return  places.push({ ...places, place });
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
        const res = await client.post(routes.placesVaccine(placeData));
        return  places.push({ ...places, placeData });
    } catch (err) {
        console.log(err)
    }
}
