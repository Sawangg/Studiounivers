# Installer
FROM node:alpine AS deps

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
WORKDIR /home/studiounivers

COPY package.json yarn.lock ./
RUN yarn install --pure-lockfile

# Builder
FROM node:alpine AS builder

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
WORKDIR /home/studiounivers

COPY . .
COPY --from=deps /home/studiounivers/node_modules ./node_modules
RUN yarn build

# Runner
FROM node:alpine

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
WORKDIR /home/studiounivers

RUN yarn global add pm2

COPY --from=builder /home/studiounivers/.next .

EXPOSE 3000

CMD [ "pm2-runtime", "yarn", "--", "start" ]