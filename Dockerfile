FROM node:18.16.0-alpine
WORKDIR /usr/src/admin
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
ENV HOST 0.0.0.0
CMD ["npm", "start"]