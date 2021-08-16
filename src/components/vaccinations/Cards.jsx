import React from "react";
import Card from "./Card";

 import domo from "../../assets/img/domo.jpg";
 import plasticos from '../../assets/img/plasticos.jpg'
 import poliVargas from '../../assets/img/poliVargas.jpg'

 const places = [
 {
  id: 1,
  title: "Super Domo",
  image: domo,
  address: "calle del domo",
  url: "https://www.google.com.ar/maps/place/Super+Domo/@-29.4406437,-66.893458,3a,75y,90t/data=!3m8!1e2!3m6!1sAF1QipMuVDF30tJY7F-gCM0g6qgqmuGrYox9NGd7dlFp!2e10!3e12!6shttps:%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipMuVDF30tJY7F-gCM0g6qgqmuGrYox9NGd7dlFp%3Dw397-h298-k-no!7i4160!8i3120!4m7!3m6!1s0x9427dbfd1a2b3159:0xc8a1dc8365fbcfa!8m2!3d-29.4406437!4d-66.893458!14m1!1BCgIgAQ",
 },
 {
   id: 2,
   title: "Sindicato del Plastico",
   image: plasticos,
   address: "calle del domo",
   url: "https://www.google.com.ar/maps/place/Sindicato+del+Pl%C3%A1stico+La+Rioja/@-29.4212615,-66.8572579,3a,75y,90t/data=!3m8!1e2!3m6!1sAF1QipMKrDB7s-L3AaXnmNJy0iA8Z3sjrw3O830rY7Ks!2e10!3e12!6shttps:%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipMKrDB7s-L3AaXnmNJy0iA8Z3sjrw3O830rY7Ks%3Dw114-h86-k-no!7i4000!8i3000!4m5!3m4!1s0x9427db082d003381:0x8187ddc5106325e2!8m2!3d-29.4212745!4d-66.8572572",
 },
 {
   id: 3,
   title: "Polideportivo de Vargas",
   address: "calle del domo",
   image: poliVargas,
   url: "https://www.google.com.ar/maps/place/Polideportivo+De+Vargas/@-29.3951157,-66.8460929,3a,75y,145.77h,74.42t/data=!3m7!1e1!3m5!1sqsQwGp_4cFA3W2LoeCIKIQ!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fpanoid%3DqsQwGp_4cFA3W2LoeCIKIQ%26cb_client%3Dmaps_sv.tactile.gps%26w%3D224%26h%3D298%26yaw%3D172.44891%26pitch%3D0%26thumbfov%3D100!7i13312!8i6656!4m7!3m6!1s0x9427da5732378cf9:0xc3683c4662399443!8m2!3d-29.3954144!4d-66.8460385!14m1!1BCgIgARICCAI",
  },
 ];

function Cards() {
  return (
    <div className="container d-flex justify-content-center align-items-center h-100">
      <div className="row">
        {places.map(({ title, image, url, id, address }) => (
          <div className="col-md-4" key={id}>
            <Card imageSource={image} title={title} url={url} address={address}/>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cards