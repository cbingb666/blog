FROM nginx
COPY ./dist $HOME/notes
COPY ./vhost.nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
