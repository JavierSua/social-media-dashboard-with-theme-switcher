# build
npm run build

# save the latest commit hash as a string
LOGSTRING=$(git log)
COMMIT=$(echo $LOGSTRING | awk '{print $2}')

#navigate into the build
cd dist

git init
git add -A 
git commit -m "deploy (commit: $COMMIT)"

git push -f https://github.com/JavierSua/social-media-dashboard-with-theme-switcher.git master:gh-pages

cd ..