# --- Build Stage ---
FROM node:20-slim AS builder

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies (including devDependencies for build)
RUN npm install

# Copy source code
COPY . .

# Build the Next.js application
RUN npm run build

# --- Production Stage ---
FROM node:20-slim

WORKDIR /app

# Copy necessary files from builder
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/next.config.js ./

# Set environment variables
ENV NODE_ENV=production

# Expose the frontend port
EXPOSE 3000

# Start the application
CMD ["npm", "start"]
