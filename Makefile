install: npm install

publish:
	npm publish --dry-run

start:
	npx babel-node src/bin/brain-games.js
