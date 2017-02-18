#
#!/bin/sh
#

# Run Casper Crawler to get CSV file
echo "Executing JavaScript file"
casperjs crawler.js

# Parse the CSV file to get usefull data
echo "Executing Python file"
python3 parser.py

# Push the changes to Git
echo "Executing Git commands"
git add -A
git commit -m "Update"
git push

