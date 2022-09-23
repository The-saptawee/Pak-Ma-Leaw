FROM node:16.14.0

WORKDIR /usr/src/app

COPY ["package.json", "yarn.lock", ".env.local", ".env", "./"]

# Installs all packages
RUN yarn install

COPY . .

EXPOSE 3000

CMD [ "nodemon server.js" ]


