.PHONY: build-wasm setup-wasm-demo build-wasm-demo

export NODE_ENV = production

build-wasm:
	wasm-pack build --release popcap-pak-wasm --out-dir pkg
	
setup-wasm-demo:
	cd popcap-pak-wasm/demo && npm install

build-wasm-demo:
	cd popcap-pak-wasm/demo && npm run build