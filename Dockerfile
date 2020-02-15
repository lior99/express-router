FROM node:lts-alpine3.9

WORKDIR /home/app

COPY package.json . 

RUN npm install

COPY . .

EXPOSE 8080

CMD ["npm", "start"]
