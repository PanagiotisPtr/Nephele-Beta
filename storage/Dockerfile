FROM node

WORKDIR /usr/src/storage

COPY package*.json ./

RUN npm install
COPY . .

EXPOSE 5000
CMD ["npm", "start"]
