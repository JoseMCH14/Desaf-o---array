console.log("Entre al archivo index.js", "inicializacion");

const Alq_completo = document.querySelector("#Alquilerdisponible");
const Ven_completo = document.querySelector("#Ventadisponible");

const pathname = window.location.pathname;

const propiedades_alquiler = [
  {
    nombre: "MonoAmbiente",
    src: "./assets/img/Alquiler 1.jpg",
    descripcion: "Depa. tipo estudio",
    ubicacion: "Santiago centro",
    habitaciones: 1,
    baño: 1,
    costo: 300000,
    smoke: false,
    pets: true,
  },
  {
    nombre: "Departamento nuevo equipado",
    src: "./assets/img/Alquiler 2.jpg",
    descripcion: "Depa. tipo estudio",
    ubicacion: "Las condes",
    habitaciones: 1,
    baño: 1,
    costo: 350000,
    smoke: true,
    pets: false,
  },
  {
    nombre: "Casa centrico",
    src: "./assets/img/Alquiler 3.jpg",
    descripcion: "Depa. tipo estudio",
    ubicacion: "Providencia",
    habitaciones: 1,
    baño: 1,
    costo: 500000,
    smoke: true,
    pets: true,
  },
  {
    nombre: "MonoAmbiente",
    src: "./assets/img/Alquiler 4.jpeg",
    descripcion: "Depa. tipo estudio",
    ubicacion: "Santiago centro",
    habitaciones: 1,
    baño: 1,
    costo: 300000,
    smoke: false,
    pets: true,
  },
  {
    nombre: "Departamento nuevo equipado",
    src: "./assets/img/Alquiler 5.jpg",
    descripcion: "Depa. tipo estudio",
    ubicacion: "Las condes",
    habitaciones: 1,
    baño: 1,
    costo: 350000,
    smoke: true,
    pets: false,
  },
  {
    nombre: "Casa centrico",
    src: "./assets/img/Alquiler 6.jpeg",
    descripcion: "Depa. tipo estudio",
    ubicacion: "Providencia",
    habitaciones: 1,
    baño: 1,
    costo: 500000,
    smoke: true,
    pets: true,
  },
];

const propiedades_venta = [
  {
    nombre: "MonoAmbiente",
    src: "./assets/img/Venta 1.jpg",
    descripcion: "Depa. tipo estudio",
    ubicacion: "Santiago centro",
    habitaciones: 1,
    baño: 1,
    costo: 300000,
    smoke: false,
    pets: true,
  },
  {
    nombre: "Departamento nuevo equipado",
    src: "./assets/img/Venta 2.jpeg",
    descripcion: "Depa. tipo estudio",
    ubicacion: "Las condes",
    habitaciones: 1,
    baño: 1,
    costo: 350000,
    smoke: true,
    pets: false,
  },
  {
    nombre: "Casa centrico",
    src: "./assets/img/Venta 3.jpg",
    descripcion: "Depa. tipo estudio",
    ubicacion: "Providencia",
    habitaciones: 1,
    baño: 1,
    costo: 500000,
    smoke: true,
    pets: true,
  },
  {
    nombre: "MonoAmbiente",
    src: "./assets/img/Venta 4.jpg",
    descripcion: "Depa. tipo estudio",
    ubicacion: "Santiago centro",
    habitaciones: 1,
    baño: 1,
    costo: 300000,
    smoke: false,
    pets: true,
  },
  {
    nombre: "Departamento nuevo equipado",
    src: "./assets/img/Venta_5.jpg",
    descripcion: "Depa. tipo estudio",
    ubicacion: "Las condes",
    habitaciones: 1,
    baño: 1,
    costo: 350000,
    smoke: true,
    pets: false,
  },
  {
    nombre: "Casa centrico",
    src: "./assets/img/Venta_6.jpg",
    descripcion: "Depa. tipo estudio",
    ubicacion: "Providencia",
    habitaciones: 1,
    baño: 1,
    costo: 500000,
    smoke: true,
    pets: true,
  },
];

let alq = function(){
for (let alquiler of propiedades_alquiler) {
    let mascotaC = '';
    let mascotaT = '';
    let mascotaI = '';
    let fumarC = '';
    let fumarT = '';
    let fumarI= '';

    if (alquiler.smoke == false){
        fumarC = "red"
        fumarT="No se permite fumar"
        fumarI="fas fa-smoking-ban"
    }
    else{
        fumarC = "green"
        fumarT='Permitido fumar'
        fumarI="fas fa-smoking"
    }

    if (alquiler.pets == false){
        mascotaC = "red"
        mascotaT = "No se permiten mascotas"
        mascotaI = "fa-solid fa-ban"
    }
    else{
        mascotaC = "green"
        mascotaT = "Mascotas permitidas"
        mascotaI = "fa-solid fa-paw"
    }
  Alq_completo.innerHTML += `
<div class="card">
            <img src="${alquiler.src}" alt=propieda">
            <div class="cardtext">
                <h3 class="nombre">${alquiler.nombre}</h3>
                <h4 class="descripcion">${alquiler.descripcion}</h4>
                <p class="direccion"><i class="fas fa-map-marker-alt"></i>${alquiler.ubicacion}</p>  
                <p class="Habitaciones"><i class="fas fa-bed"></i>${alquiler.habitaciones} Habitaciones | <i class="fas fa-bath"></i>${alquiler.baño} Baños</p>
                <p><i class="fas fa-dollar-sign"></i>${alquiler.costo}</p>
                <p style="color:${fumarC}"><i class="${fumarI}"></i>${fumarT}</p>
                <p style="color:${mascotaC}"><i class="${mascotaI}"></i>${mascotaT}</p>
            </div>
        </div>
`
}
}

let vent = function(){
for (let venta of propiedades_venta) {
  let mascotaC = '';
  let mascotaT = '';
  let mascotaI = '';
  let fumarC = '';
  let fumarT = '';
  let fumarI= '';

  if (venta.smoke == false){
      fumarC = "red"
      fumarT="No se permite fumar"
      fumarI="fas fa-smoking-ban"
  }
  else{
      fumarC = "green"
      fumarT='Permitido fumar'
      fumarI="fas fa-smoking"
  }

  if (venta.pets == false){
      mascotaC = "red"
      mascotaT = "No se permiten mascotas"
      mascotaI = "fa-solid fa-ban"
  }
  else{
      mascotaC = "green"
      mascotaT = "Mascotas permitidas"
      mascotaI = "fa-solid fa-paw"
  }
  Ven_completo.innerHTML += `
<div class="card">
          <img src="${venta.src}" alt=propieda">
          <div class="cardtext">
              <h3 class="nombre">${venta.nombre}</h3>
              <h4 class="descripcion">${venta.descripcion}</h4>
              <p class="direccion"><i class="fas fa-map-marker-alt"></i>${venta.ubicacion}</p>  
              <p class="Habitaciones"><i class="fas fa-bed"></i>${venta.habitaciones} Habitaciones | <i class="fas fa-bath"></i>${venta.baño} Baños</p>
              <p><i class="fas fa-dollar-sign"></i>${venta.costo}</p>
              <p style="color:${fumarC}"><i class="${fumarI}"></i>${fumarT}</p>
              <p style="color:${mascotaC}"><i class="${mascotaI}"></i>${mascotaT}</p>
          </div>
      </div>
`
}
}

if (pathname === '/index.html'){

}else if (pathname === '/propiedades_alquiler.html'){
  alq();
}else if (pathname === '/propiedades_venta.html'){
  vent();
}