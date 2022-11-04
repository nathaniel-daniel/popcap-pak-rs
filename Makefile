.PHONY: build-wasm setup-wasm-demo build-wasm-demo

build-wasm:
	wasm-pack build --release popcap-pak-wasm --out-dir pkg
	
setup-wasm-demo:
	cd popcap-pak-wasm/demo && npm install

build-wasm-demo:
	cd popcap-pak-wasm/demo && npm build