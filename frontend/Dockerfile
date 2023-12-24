# Installer
FROM node:alpine AS deps

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
WORKDIR /home/studiounivers

COPY package.json ./
RUN npm i

# Builder
FROM node:alpine AS builder

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
WORKDIR /home/studiounivers

COPY . .
COPY --from=deps /home/studiounivers/node_modules ./node_modules
RUN npm run build

# Runner
FROM node:alpine

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
WORKDIR /home/studiounivers

RUN yarn global add pm2

COPY --from=builder /home/studiounivers/.next .

EXPOSE 3000

CMD [ "pm2-runtime", "yarn", "--", "start" ]