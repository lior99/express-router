FROM node:lts-alpine3.9
WORKDIR /express-router

COPY package.json . 

RUN npm install

COPY . .

EXPOSE 8080

CMD ["npm", "start"]
