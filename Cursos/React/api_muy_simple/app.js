const descargarUsuarios = cantidad=> new Promise((resolve,reject) =>{
    const api = `https://randomuser.me/api/?results=${cantidad}&nat=us`; 

    //invocación de ajax
    /*Consta de 3 o 4 partes:
     */
    //1-Crear el objeto o llamado
     const xhr = new XMLHttpRequest();

     //2-Abrir la conexion
     /*recibe 3 parametros , el tipo (GET o POST) ,la url de la api y si quieres que sea sincrono o no*/
     xhr.open('GET',api,true);


    //  3-Mandar los datos
    // 4-enviar la peticion

    //para revisar la respuesta
    xhr.onload = () =>{
        if(xhr.status === 200 ){ //todo ok
            resolve(JSON.parse(xhr.responseText).results);
        }else{
            reject(Error(xhr.statusText));
        }
    }   


    xhr.send();
});

descargarUsuarios(20).then(
    miembros => imprimir(miembros),
    error => console.error( new Error("hubo un error "+error))
)
function imprimir(usuarios){
    let html='';
    usuarios.forEach(element => {
        html +=`p<li>
                nombre: ${element.name.first}
                imagen: <img src="${element.picture.medium}">
            </li>`;
    });

    const app = document.querySelector("#app");
    app.innerHTML  = html;
}