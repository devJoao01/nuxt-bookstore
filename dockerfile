FROM node:18

# Define o diretório de trabalho
WORKDIR /app

# Copia os arquivos de dependência
COPY package*.json ./

# Instala as dependências
RUN npm install

# Copia o restante dos arquivos
COPY . .

# Executa o build
RUN npm run build

# (Opcional) Remove arquivos não necessários após o build
RUN npm run clean

# Define o comando padrão para o contêiner
CMD ["npm", "run", "dev"]
