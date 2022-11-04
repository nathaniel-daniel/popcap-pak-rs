.PHONY: wasm serve-wasm-demo

wasm:
	wasm-pack build --release popcap-pak-wasm --out-dir pkg
	
serve-wasm-demo:
	cd popcap-pak-wasm/demo && python -m http.server