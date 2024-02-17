FROM node:20.11.1-slim

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm i

COPY . .
