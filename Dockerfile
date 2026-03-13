FROM alpine:latest

# Copy the PocketBase binary
COPY pocketbase /app/pocketbase

# Copy data and migrations
COPY pb_data /app/pb_data
COPY pb_migrations /app/pb_migrations

# Copy the start script
COPY start.sh /app/start.sh

# Set working directory
WORKDIR /app

# Make binaries executable
RUN chmod +x pocketbase start.sh

# Expose the port (Railway uses $PORT)
EXPOSE $PORT

# Run the start script
CMD ["./start.sh"]