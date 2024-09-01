FROM node:22-alpine3.20

LABEL maintainer="Ralph <ralph@soranix.com>" \
      description="Docker image for the Soranix Landing Page application"

WORKDIR /app

COPY package*.json ./

RUN --mount=type=cache,target=/app/.npm \
    npm set cache /app/.npm && \
    npm i

COPY . .

ENV PORT 3000

EXPOSE ${PORT}


CMD ["npm", "run", "dev"]
