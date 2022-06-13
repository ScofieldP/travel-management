# build Reactjs app
npm run build

# move to build folder
cd build

# clone file 200.html form index.html
cp index.html 200.html

# start deploying via Surge 
surge . g08-restaurant-traveloka.surge.sh
