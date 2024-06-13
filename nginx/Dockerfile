# Use the official Nginx image as a base
FROM nginx:alpine

# Copy the Nginx template configuration file
COPY nginx.template.conf /etc/nginx/templates/nginx.template.conf

# Copy the entrypoint script
COPY docker-entrypoint.sh /docker-entrypoint.d/99-envsubst.sh