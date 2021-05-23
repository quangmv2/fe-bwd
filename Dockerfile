FROM node

RUN npm i -g yarn

WORKDIR /venv
COPY start.sh /venv
RUN chmod a+x /venv/*

ENTRYPOINT [ "/venv/start.sh" ]

EXPOSE 80