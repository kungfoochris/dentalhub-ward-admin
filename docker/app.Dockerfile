FROM node:11

# Building Vue app
RUN mkdir -p /app
WORKDIR /app

COPY package.json /app/package.json
COPY package-lock.json /app/package-lock.json
RUN npm install
RUN npm rebuild node-sass --force

COPY . /app/
EXPOSE 8080

CMD ["npm","run","serve"]
