FROM node:20-alpine AS dev

WORKDIR /workspace

COPY . .

RUN npm install
RUN npm run build

CMD ["npm","start"]