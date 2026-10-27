#!/bin/sh
errores=0

for archivo in README.md LICENSE CONTRIBUTING.md; do
  if [ -f $archivo ]; then
    echo "OK existe: $archivo"
  else
    echo "ERROR no existe: $archivo"
    errores=$((errores+1))
  fi
done

if [ "$errores" -gt 0 ]; then
  echo "Faltan archivos"
  exit 1
else
  echo "Esta toda la documentacion correctamente"
fi
