FROM node:18.16.0-alpine
WORKDIR /usr/src/vhm
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000