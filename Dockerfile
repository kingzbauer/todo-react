FROM node:dubnium-alpine

MAINTAINER Jack Mwangi <jackmwangi@gmail.com>

WORKDIR /home/app/

COPY package*.json ./

RUN npm install

# build the project
COPY ./ ./
RUN npm run build

EXPOSE 3000

ENTRYPOINT ["npm", "run"]
CMD ["start"]
