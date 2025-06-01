#!/bin/bash

# Cloudflare Pages Build Script
echo "🚀 Starting Zero Core Studio build..."

# Ensure we're using NPM (not Yarn)
echo "📦 Installing dependencies with NPM..."
npm ci --only=production false

# Build the project
echo "🏗️ Building the project..."
npm run build

# Export for static hosting
echo "📤 Exporting static files..."
npm run build

echo "✅ Build completed successfully!" 