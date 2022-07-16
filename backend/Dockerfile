# Installer
FROM node:alpine AS deps

ENV NODE_ENV=production
WORKDIR /home/studiounivers

COPY package.json yarn.lock ./
RUN yarn install --pure-lockfile

# Builder
FROM deps AS builder

ENV NODE_ENV=production
WORKDIR /home/studiounivers

COPY . .
COPY --from=deps /home/studiounivers/node_modules ./node_modules
RUN yarn build

# Runner
FROM node:alpine

ENV FORCE_COLOR=1
ENV NODE_ENV=production
WORKDIR /home/studiounivers

COPY --from=builder /home/studiounivers/package.json ./package.json
COPY --from=builder /home/studiounivers/dist ./dist
COPY --from=builder /home/studiounivers/node_modules ./node_modules

EXPOSE 3001
USER node

CMD ["yarn", "start:prod"]