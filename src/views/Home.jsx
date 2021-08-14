import React, { Component,Col, Row, Image } from 'react';
import Cards from '../components/vaccinations/Cards';



export class Home extends Component {

    render(){
        return(
            <div className="Home">
            {/* <Row>
                <Col xs={6} md={4}>
                    <Image src="https://www.segurilatam.com/wp-content/uploads/sites/5/2021/03/vacuna-covid-argentina-900x600.jpg" rounded />
                </Col>
            </Row>     */}
            <p className="text">
            Conozca los lugares de Vacunacion contra el Covid-19 en La Rioja Capital
            </p>
            <p className="text">
            Solo debe presentarse cuando tenga turno asignado o sea llamado por los medios de comunicación oficial 
            </p>
                <Cards />
            
            </div>
        )
    }
}