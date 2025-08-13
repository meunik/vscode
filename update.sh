#!/bin/bash
set -e

REPO_URL=$1
CLONE_DIR="/var/www/html"

if [ ! -d "$CLONE_DIR/.git" ]; then
    echo "📥 Clonando repositório..."
    git clone --branch gh-pages --single-branch "$REPO_URL" "$CLONE_DIR"
else
    echo "🔄 Repositório já existe, atualizando..."
    cd "$CLONE_DIR"
    git reset --hard
    git pull origin gh-pages
fi
