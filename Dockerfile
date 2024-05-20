FROM node:lts-bullseye

# Set the working directory
WORKDIR /app

# Copy the package.json and package-lock.json files
COPY package*.json ./

# Install the dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Set the environment variables for MySQL connection

# Expose the port if your application listens on a specific port
# EXPOSE 3000

# Start the application
CMD ["node", "dbCon.js"]
