const base = process.env.REACT_APP_API_BASE_URL;

const routes = {
    root: () => `${base}`,
    placesVaccine: () => `${base}/places`,
    placesByIdVaccine: (id) => `${base}/places/${id}`,

    sample: () => `${base}/users?page=2`
}

export default routes;