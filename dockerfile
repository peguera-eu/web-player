FROM node:20-alpine AS dev

WORKDIR /workspace

COPY package*.json ./
RUN npm install

COPY . .

RUN npm run build

CMD ["npm","start"]