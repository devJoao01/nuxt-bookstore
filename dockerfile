
FROM node:18

WORKDIR /app

COPY package*.json ./

# Install dependencies
RUN npm install

COPY . .

RUN npm run build

# Start the application
CMD ["npm", "run", "dev"]
