From node:alpine

ADD . .

Run npm install

CMD ["npm", "start"]
