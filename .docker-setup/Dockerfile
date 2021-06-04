FROM node

RUN npm i -g yarn

WORKDIR /var/www/html
COPY start.sh /venv
RUN chmod a+x /venv/*

ENTRYPOINT [ "node" ]

EXPOSE 80