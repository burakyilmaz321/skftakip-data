#
#!/bin/sh
#

# Run Casper Crawler to get CSV file
casperjs crawler.js

# Parse the CSV file to get usefull data
python3 parser.py

# Push the changes to Git
git add -A
git commit -m "Update"
git push
