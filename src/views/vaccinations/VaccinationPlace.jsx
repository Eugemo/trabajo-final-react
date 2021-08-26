import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { vaccinationPlaces } from '../../app/redux/selectors/placesSelector';
import MapLeafLet from '../../components/common/MapLeaFlet';

const mapStateToProps = state => ({
    places: vaccinationPlaces(state),
});

const VaccinationPlaces = (props) => {
    const {id} = props?.match?.params;
    const [place, setPlace] = useState({});

    useEffect(() => {        
       setPlace(props?.places?.filter(({_id}) => _id === id )[0]);
    }, []);

    return (
        <MapLeafLet place={place} />
    );
}
 
export default connect(mapStateToProps)(VaccinationPlaces);