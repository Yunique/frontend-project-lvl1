install: npm install

publish:
	npm publish --dry-run

start:
	npx babel-node src/bin/brain-games.js

startgame: 
	npx babel-node src/bin/brain-even.js

lint: 
	npx eslint
