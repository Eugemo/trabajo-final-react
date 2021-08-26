const url = process.env.REACT_APP_API_BASE_URL;

const routes = {
    root: () => `${url}/`,
    placesVaccine: () => `${url}/places`,
    placesByIdVaccine: (id) => `${url}/places/${id}`,

    // sample: () => `${base}/users?page=2`
}

export default routes;