const fs = require('node:fs');
let errores = 0;

const archivos = ['README.md','LICENSE','CONTRIBUTING.md'];

for (const archivo of archivos) {
  if(fs.existsSync(archivo)) {
    console.log(`OK existe: ${archivo}`);
  }else{
    console.error(`ERROR no existe: ${archivo}`);
    errores++;
  }
}

if (errores > 0) {
  console.error(`Faltan archivos`);
  process.exitCode = 1;
}else{
  console.log(`Todos los documentos estan correctamente`);
}
