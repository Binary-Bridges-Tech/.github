#!/bin/bash

# Build the project
echo "Building the project..."
npm run build

# Check if build was successful
if [ $? -eq 0 ]; then
    echo "Build successful!"
    echo "The built files are in the 'dist' directory."
    echo ""
    echo "To deploy to GitHub Pages:"
    echo "1. Push your changes to GitHub"
    echo "2. Go to your repository settings"
    echo "3. Enable GitHub Pages and select 'gh-pages' branch"
    echo "4. Your site will be available at: https://yourusername.github.io/binary-bridges-static/"
else
    echo "Build failed!"
    exit 1
fi 