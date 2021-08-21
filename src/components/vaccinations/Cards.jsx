import React from "react";
import Card from "./Card";

function Cards({places}) {
  
  return (
    <div className="container justify-content-center align-items-center h-100">
      <div className="row g-4">
        
        {places?.map(({ _id, name, address, url, latitude, longitude }) => (
          <div className="col-md-4" key={_id}>
            <Card imageSource={url} title={name} url={url} address={address} lat={latitude} log={longitude} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cards;