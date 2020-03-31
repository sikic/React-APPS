export async function obtenerToken(idCliente,secret){
   
    const response = await fetch('https://api.sandbox.paypal.com/v1/oauth2/token', {
      method: 'GET',
      body: 'grant_type=client_credentials',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': `Basic Auth ${btoa( ${idCliente}:${secret})}`
      }
    });

    const myJson = await response.json(); //extract JSON from the http response
    // do something with myJson
    console.log(myJson);
  }
