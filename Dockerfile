FROM ubuntu:18.04
RUN apt-get update
RUN apt-get install -y nginx curl
RUN curl -sL https://deb.nodesource.com/setup_14.x -o nodesource_setup.sh
RUN bash nodesource_setup.sh
RUN apt install nodejs -y
RUN nodejs -v

WORKDIR /venv
COPY start.sh /venv
RUN chmod a+x /venv/*

ENTRYPOINT [ "/venv/start.sh" ]

EXPOSE 80