#!/bin/bash
set -e

# Primeira atualização
/update.sh "$REPO_URL"

# Inicia o Nginx em segundo plano
nginx -g 'daemon off;' &

# Loop para atualizar a cada 5 minutos
while true; do
    echo "⏳ Verificando por atualizações..."
    /update.sh "$REPO_URL"
    sleep 300
done
