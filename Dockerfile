# # Base image with Node and pnpm
# FROM node:24.2-slim AS base

# ENV PNPM_HOME="/pnpm"
# ENV PATH="$PNPM_HOME:$PATH"

# # pnpm に IPv4 を使わせる方法（node/pnpm では環境変数が効く）
# ENV NODE_OPTIONS="--dns-result-order=ipv4first"

# RUN corepack enable

# WORKDIR /app
# COPY package*.json ./
# COPY pnpm-lock.yaml ./

# # ---------- Dev dependencies stage ----------
# FROM base AS dev
# RUN pnpm install

# COPY . .
# EXPOSE 3000
# CMD ["pnpm", "dev"]

# # ---------- Production build stage ----------
# FROM base AS build
# RUN pnpm install --frozen-lockfile
# COPY . .
# RUN pnpm build

# # ---------- Final production stage ----------
# FROM node:24.2-slim AS prod
# ENV PNPM_HOME="/pnpm"
# ENV PATH="$PNPM_HOME:$PATH"
# RUN corepack enable
# WORKDIR /app

# COPY --from=build /app/package.json ./package.json
# COPY --from=build /app/pnpm-lock.yaml ./pnpm-lock.yaml
# COPY --from=build /app/node_modules ./node_modules
# COPY --from=build /app/dist ./dist

# EXPOSE 3000
# CMD ["pnpm", "start"]


FROM node:24.2-slim

WORKDIR /usr/src/app

COPY package*.json pnpm-lock.yaml ./

RUN npm install -g pnpm
RUN pnpm install

COPY . .

EXPOSE 3000
CMD ["pnpm", "run", "dev"]



