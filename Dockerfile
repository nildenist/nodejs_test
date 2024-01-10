FROM node:16
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
RUN npm install @google-cloud/profiler
COPY . .
CMD [ "node", "app.js" ]