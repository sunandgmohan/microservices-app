FROM node:18

WORKDIR /app

COPY . .
RUN npm install

COPY . .

EXPOSE 3001
CMD ["node", "app.js"]


