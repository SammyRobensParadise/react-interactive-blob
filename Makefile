# makefile

.DEFAULT_GOAL := help

.PHONY: help container up all becos stop clean icons

help:
	@echo "Makefile commands:"
	@echo "------------------------------------------------------------"
	@echo "build       - builds the component library in /dist"
	@echo "publish     - publish the storybook documentation"
	@echo "start       - starts the local development server"
	@echo "storybook   - builds storybook static directory in /storybook-static"
	@echo "setup       - installs development dependencies"
	@echo "------------------------------------------------------------"

build:
	@echo "Building cjs and esm modules in /dist ... 🛠"
	npm run build
	@echo "Done! ✨"
publish:
	@echo "Publish Storybook Documentation... ⚡️ "
	npm run build-storybook
	@echo "Storybook build successfully"
	npm run deploy-storybook
	@echo "Done! ✨"
start:
	@echo "Starting Local Development Environment ... 👏"
	npm run storybook
storbook:
	@echo "Building storybook in /storbook-static..."
	npm run build-storybook
	@echo "Done! ✨"
setup:
	@echo "Installing Dependencies..."
	npm install --legacy-peer-deps
	@echo "Done! ✨"