.PHONY: build-wasm setup-wasm-demo build-wasm-demo

export NODE_ENV =

.PHONY: build-wasm
build-wasm:
	wasm-pack build --release popcap-pak-wasm --out-dir pkg

.PHONY: setup-wasm-demo	
setup-wasm-demo:
	cd popcap-pak-wasm/demo && npm install --save-dev

.PHONY: build-wasm-demo
build-wasm-demo:
	cd popcap-pak-wasm/demo && npm run build