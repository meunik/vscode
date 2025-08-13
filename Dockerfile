FROM nginx:alpine

# Instala Git e Bash
RUN apk add --no-cache git bash

# Configura Nginx para servir de /var/www/html
RUN mkdir -p /var/www/html \
    && rm -rf /etc/nginx/conf.d/default.conf \
    && echo 'server { \
        listen 80; \
        server_name _; \
        root /var/www/html; \
        index index.html; \
        location / { \
            try_files $uri $uri/ =404; \
        } \
    }' > /etc/nginx/conf.d/default.conf

# Copia scripts
COPY update.sh /update.sh
COPY entrypoint.sh /entrypoint.sh
RUN chmod +x /update.sh /entrypoint.sh

# Define variável de ambiente
ENV REPO_URL=""

EXPOSE 80

ENTRYPOINT ["/entrypoint.sh"]
