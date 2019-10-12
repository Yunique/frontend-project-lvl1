install: 
	npm install

publish:
	npm publish --dry-run

start:
	npx babel-node src/bin/brain-games.js

startEven: 
	npx babel-node src/bin/brain-even.js

startCalc:
	npx babel-node src/bin/brain-calc.js

startGcd:
	npx babel-node src/bin/brain-gcd.js

startProgression:
	npx babel-node src/bin/brain-progression.js

startPrime: 
	npx babel-node src/bin/brain-prime.js

lint: 
	npx eslint ./src
