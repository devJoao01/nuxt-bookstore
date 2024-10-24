FROM node:18

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

COPY start.sh .

CMD ["sh", "./start.sh"]
