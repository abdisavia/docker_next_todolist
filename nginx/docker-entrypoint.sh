envsubst '${CLIENT_PORT} ${API_PORT}' < /etc/nginx/templates/nginx.template.conf > /etc/nginx/conf.d/default.conf
exec "$@"