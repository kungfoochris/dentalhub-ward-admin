FROM node:11

# Building Vue app
RUN mkdir -p /app
WORKDIR /app

COPY package.json /app/package.json
COPY package-lock.json /app/package-lock.json
RUN npm install
RUN npm install -g @vue/cli-service-global
RUN npm install node-sass
RUN npm rebuild node-sass --force


COPY . /app/
EXPOSE 8081

CMD ["npm","run","serve"]
