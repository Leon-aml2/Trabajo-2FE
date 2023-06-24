//3:LEER AQUÍ COMO 3ER ITEM

//Esta función cuenta con el propósito con el que está hecha que es renderizar lo que carguemos en en ella:
var cargarTabla = (listadoNuevo)=>{
    let eSBtnAccion = document.getElementById("sBtnAccion");
    let eContenedorTabla = document.getElementById("contenedorTabla");
    let eNombre = document.getElementById("nombre");
    let eApellido = document.getElementById("apellido");
    let eRut = document.getElementById("rut");
    let eApellidoMaterno = document.getElementById("apellidoMaterno");
    let eEmail = document.getElementById("email");
    let eInscrito = document.getElementById("nIscripcion");
    //CARGAMOS LOS DATOS DE LA TABLA, ADEMÁS, DE OTROS DOS ELEMENTOS: SPAN(ESBTNACCION) Y DIV(CONTENEDOR TABLA)

    //Con la función "render" rederizamos un elemento <table> y seguido,  agregamos tr(fila) y th(head) con cada uno de los atributos que completarán la tabla (nombre,apellido,etc).
    //Usamos un for para iterar sobre nuestro registro del local storage "listadoNuevo".
    //Junto a la constante element (que es la iteración del listadoNuevo) generamos los atributos que carguemos.
    //Terminamos de generar los último elementos de la tabla, pero no podemos olvidarnos de un elemento que nos ayudará a modificalar o deshacernos del objeto que queramos.
    //Estos son dos botones que renderizará la lista más el punto recorrido de la lista que funciona cómo índice, o sea "i".
    render = "<table>"
    render += "<tr><th>Nombre</th><th>Apellido</th><th>Apellido Materno</th><th>RUT</th><th>E-mail</th><th>N° inscripción</th><th>Accion</th></tr>"
    for (let i = 0; i < listadoNuevo.length; i++) {
        const element = listadoNuevo[i];
        render+="<tr>"
        render+="<td>"+element.nombre+"</td>";
        render+="<td>"+element.apellido+"</td>";
        render+= "<td>"+element.apellidoMaterno+"</td>";
        render+= "<td>"+element.rut+"</td>";
        render+= "<td>"+element.email+"</td>";
        render+= "<td>"+element.inscrito+"</td>";
        render+="<td>"
        render+="<button id='btnEditar"+i+"'>Editar</button>"
        render+="<button id='btnEliminar"+i+"'>Eliminar</button>"
        render+="</td>"
        render+="</tr>"
    }
    //Render tiene un valor muy versátil, visto antes. Pero también
    // eContenedorTabla que recibirá su forma gracias a un innerHTML, 
    //que nos ayuda a cambiar este elemento del Dom.
    render+="</table>"
    eContenedorTabla.innerHTML = render;
    //Ocupamos nuevamente el for; aunque con el mismo propósito, -
    //esta vez es para renderizar, con ayuda de una variable "sBtn",-
    //el botón para editar y eliminar en el SPAN LLAMADO ANTERIORMENTE arriba.
    //En ambas variables creadas bajo la identación del for creamos addEventListener con diferentes propósitos.
    //Estas están dispuestas a la "escucha" por las siguiente variable: eBtnEditaUP y eBtnEliminarUp.
    for (let i = 0; i < listadoNuevo.length; i++) {
        const element = listadoNuevo[i];
        var eBtnEditar = document.getElementById("btnEditar"+i);
        eBtnEditar.addEventListener("click",()=>{
            let sBtn = "<button type='button' id='btnEditar' value='"+i+"'>Editar</button>"
            eSBtnAccion.innerHTML = sBtn

            let eBtnEditarUp = document.getElementById("btnEditar");
            console.log(eBtnEditarUp)
            eBtnEditarUp.addEventListener('click',()=>modificar(listadoNuevo)) 

            //En ambas variables, que renderizan en el SPAN, pues no solo hacen eso.
            //Inmediatamente, nos muestra la información que queremos de la siguiente forma
            //y en los elementos llamandos anteriormente (gracias a element por iterar nuestro registro):
            eNombre.value = element.nombre;
            eApellido.value = element.apellido;
            eRut.value = element.rut;
            eApellidoMaterno.value = element.apellidoMaterno;
            eEmail.value = element.email;
            eInscrito = element.inscrito;

        })

        var eBtnEliminar = document.getElementById("btnEliminar"+i);
        eBtnEliminar.addEventListener("click",()=>{
            let sBtn = "<button type='button' id='btnEliminar' value='"+i+"'>Eliminar</button>"
            eSBtnAccion.innerHTML = sBtn

            let eBtnEliminarUp = document.getElementById("btnEliminar");
            console.log(eBtnEliminarUp)
            eBtnEliminarUp.addEventListener('click',()=>eliminar(listadoNuevo)) 


            eNombre.value = element.nombre;
            eApellido.value = element.apellido;
            eRut.value = element.rut;
            eApellidoMaterno.value = element.apellidoMaterno;
            eEmail.value = element.email;
            eInscrito = element.inscrito;
        })
        
        
    }
}
//4:LEER COMO 4TO ITEM
var modificar = (listadoNuevo)=>{
    //Además de llamar a los mismo elementos que hicimos anteriormente,
    //para modificar necesitamos llamar al botón renderizado en el SPAN.
    let eNombre = document.getElementById("nombre");
    let eApellido = document.getElementById("apellido");
    let eRut = document.getElementById("rut");
    let eBtnEditarUp = document.getElementById("btnEditar");
    let eApellidoMaterno = document.getElementById("apellidoMaterno");
    let eEmail = document.getElementById("email");
    let eInscrito = document.getElementById("nIscripcion");
            
    let nombre = eNombre.value;
    let apellido = eApellido.value;
    let apellidoMaterno = eApellidoMaterno;
    let rut = eRut.value;
    let email = eEmail.value;
    let inscrito = eInscrito.value;
    let indice = eBtnEditarUp.value;
    
    //Usamos esta forma para actualizar los valores; y si no se guardarán los que aparecen en pantalla.
    listadoNuevo[indice].nombre = nombre;
    listadoNuevo[indice].apellido = apellido;
    listadoNuevo[indice].apellidoMaterno = apellidoMaterno;
    listadoNuevo[indice].rut = rut;
    listadoNuevo[indice].email = email;
    listadoNuevo[indice].inscrito = inscrito;
    //Esto debe ser cargado debidamente en lsTR, o sea, volviéndolos strings.
    localStorage.setItem('trabajo',JSON.stringify(listadoNuevo))
    cargarTabla(listadoNuevo);
}
//5:LEER COMO 5TO ITEM
var eliminar = (listadoNuevo)=>{
    //Llamada esta función le damos el valor de indice, pero esta vez,
    //lo usaremos para descartar objetos similares para crear una nueva lista, sin este valor.
    //Lo haremos con una función .filter()
    //No nos podemos olvidar del ID antes creado...
    //Para no colapzar nuestra lista, con una variable, o sea, listaFinal:
    //en ella sobreescribiremos el ID de nuestros objetos.
    //Con ayuda de la función .map(lista,id o posición) vamos a desmantelar nuestra lista cómo p y reasignaremos su ID.
    let eBtnEliminarUp = document.getElementById("btnEliminar");
    let indice = eBtnEliminarUp.value;
    let lista = listadoNuevo.filter((p)=>p.id!=indice)
    let listaFinal = lista.map((p,index)=>{return {...p,'id':index}})
    //Esto debe ser cargado debidamente en lsTR, o sea, volviéndolos strings.
    localStorage.setItem('trabajo',JSON.stringify(listaFinal))
    cargarTabla(listaFinal)
}

//2:LEER AQUIÍ CÓMO SEGUNDO ITEM

// Función que trae elementos y extrae su valor desde el html.
//Además, cuenta con una condicional abajo una función .getItem():
var registrar = ()=>{
    //Input
    let eNombre = document.getElementById("nombre");
    let eApellido = document.getElementById("apellido");
    let eRut = document.getElementById("rut");
    let eApellidoMaterno = document.getElementById("apellidoMaterno");
    let eEmail = document.getElementById("email");
    let eInscrito = document.getElementById("nIscripcion");
    let nombre = eNombre.value;
    let apellido = eApellido.value;
    let rut = eRut.value;
    let apellidoMaterno = eApellidoMaterno.value;
    let email = eEmail.value;
    let inscrito = eInscrito.value;
    //Primero usamos una variable para llamar a una función .getItem(). Traerá "ese algo" del localStorage que está referenciado "trabajo".
    let listadoAntiguoStr = localStorage.getItem("trabajo");
    //Con la vairable de abajo: convertimos "ese algo"  en objetos con ayuda de la función .parse()
    let listaAntiguo = JSON.parse(listadoAntiguoStr);
    //Esta condicional, de dos opciones que está aquí abajo, agrega el objeto persona a la lista generada, y si está creada, simplemente lo sigue agregando, pero teniendo en cuenta los objetos creado en la variable anterior.
    if(listaAntiguo==null){
        let persona = {"id":0,"nombre":nombre,"apellido":apellido, "apellidoMaterno":apellidoMaterno,"rut":rut ,"email":email,"inscrito":inscrito};
        var listadoNuevo = [persona]
    }else{
        let persona = {"id":listaAntiguo.length,"nombre":nombre,"apellido":apellido,"apellidoMaterno":apellidoMaterno, "rut":rut,"email":email,"inscrito":inscrito};
        var listadoNuevo = [...listaAntiguo,persona]
        //Hay que mencionar los tres puntos "..." y se usa para ir desamblando la lista, lo que en este caso se usa para agregar "ese algo" antes ya mencionado.
    }
    console.log(listadoNuevo)
    localStorage.setItem("trabajo",JSON.stringify(listadoNuevo));
    //"Ese algo": aquí por fin, metódicamente, se envía los parametros obtenidos desde la página cómo objeto {}
    //Se usa .stringify para convertirlo en string y almacenarlo en el localSTR
    //Además se puede ver aquí, un par de veces en esta función varias referencias a JSON y "trabajo".

    //Hacemos referencia al parámetro que usaremos para cargar en la siguiente función:
    cargarTabla(listadoNuevo)    
}

//La siguiente es una función usada de manera sistemática para cargar os objetos con sus atributos o valores,-
//-dicho de otra forma, de forma pura mostrar los atributos en la Tabla:
var obtenerDatos = ()=>{
    let listadoAntiguoStr = localStorage.getItem("trabajo");
    let listaAntiguo = JSON.parse(listadoAntiguoStr);
    cargarTabla(listaAntiguo)
}

//1:LEER AQUÍ ABAJO PRIMERO

document.getElementById("btn").addEventListener("click",registrar)
//Hay un ID llamado btn que sensible al "click", al ser precionado, llama a la función.
addEventListener('load',obtenerDatos)
//Los datos se muestran al cargar la página.