FROM node:20-alpine AS base

FROM base as deps
RUN apk add --no-cache libc6-compat
WORKDIR /workspace

COPY package.json package-lock.json* ./
RUN npm ci

FROM base as build 
WORKDIR /workspace

COPY --from=deps /workspace/node_modules ./node_modules
COPY . .

RUN npm run build

FROM base as app 
WORKDIR /workspace
ENV NODE_ENV production

COPY --from=build /workspace/public ./public
COPY --from=build /workspace/.next/ ./.next
COPY package.json package-lock.json* ./

CMD npm start