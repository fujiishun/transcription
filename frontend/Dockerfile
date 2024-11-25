FROM node:23

WORKDIR /app

COPY app/package*.json ./

RUN npm install

COPY . .

CMD ["npm", "start"]
