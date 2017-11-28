build:
	babel --out-dir lib src

publish: build
	npm publish
