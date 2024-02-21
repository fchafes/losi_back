require("dotenv").config();
const express = require("express");
const routes = require("./routes");
const APP_PORT = process.env.APP_PORT || 3000;
const app = express();
const cors = require('cors');  
// SDK de Mercado Pago
const {MercadoPagoConfig} = require('mercadopago');
// Agrega credenciales
const client = new MercadoPagoConfig({ accessToken: 'TEST-2509782001690764-022117-bedefb8cee5cd87c46026a7a9b95368b-274998896' });

app.use(cors());
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

routes(app);

app.listen(APP_PORT, () => {
  console.log(`\n[Express] Servidor corriendo en el puerto ${APP_PORT}.`);
  console.log(`[Express] Ingresar a http://localhost:${APP_PORT}.\n`);
});
