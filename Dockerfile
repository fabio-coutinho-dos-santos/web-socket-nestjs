FROM node:20-alpine

WORKDIR /app

COPY . /app

RUN npm i && npm run build && npm i pm2 -g

EXPOSE 3000

CMD ["pm2-runtime", "dist/main.js"]