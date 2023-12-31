FROM node:alpine

ADD package.json package-lock.json ./

RUN npm install
RUN npm install -g nodemon

ADD bin ./bin
ADD src ./src

CMD ["nodemon"]
