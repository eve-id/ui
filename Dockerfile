FROM cypress/browsers:node13.8.0-chrome81-ff75 as build
WORKDIR /app
COPY package*.json ./
COPY .git* ./
RUN npm ci
COPY . .
RUN npm run lint && npm run build

FROM node:14.5.0-alpine3.12 as prod
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci --production

FROM m03geek/alpine-node:nano-14.6
WORKDIR /app
COPY --from=build /app/__sapper__/build __sapper__/build
COPY --from=build /app/static static
COPY --from=prod /app .
CMD ["node", "__sapper__/build"]