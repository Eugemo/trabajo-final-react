import routes from '../rest/routes';
import placesVaccine from '../rest/places';

export const getPlaces = async () => {
    const places = await place.get(routes.placesVaccine());
    return places.data;
}