import express from "express";
import api from 'api';
const app = express()



const sdk = api('@render-api/v1.0#dnrc1ulf088q9j');

sdk.auth('rnd_xTyjqKemHQIFCCagCeM6FlVVPYmd');
sdk.getServices({limit: '20'})
  .then(({ data }) => console.log(data))
  .catch(err => console.error(err));
