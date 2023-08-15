# base image
FROM node:alpine

# working directory
WORKDIR /app

# copy package.json first to avoid unnecessary dependency installation at every change
COPY package.json .
# install dependencies
RUN npm install

# copy files
COPY . .

# start the app
CMD [ "npm", "start" ]