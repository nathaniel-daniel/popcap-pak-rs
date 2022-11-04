<script>
    import DirectoryNode from './DirectoryNode.svelte';
    export let PopCapPak;
    
    let pakFile = null;
    let pakFileDir = {};
    
    let fileType = null;
    let fileData = null;
    let fileName = null;
    
    async function loadFile(event) {
        let input = event.target;
        let file = input.files[0];
        
        pakFile = null;
        pakFileDir = {};
        
        file.arrayBuffer()
            .catch(console.error)
            .then((arrayBuffer) => {
                let newPakFile = new PopCapPak.Pak(arrayBuffer);
                let newPakFileDir = {};
                for(let i = 0; i < newPakFile.length; i++){
                    let entry = newPakFile.entry(i);
                    let path = entry.path();
                    
                    let pathSegments = path.split(/[\\\/]/);
                    let node = newPakFileDir;
                    for(let i = 0; i < pathSegments.length; i++) {
                        let path = pathSegments[i];
                        
                        if(i + 1 < pathSegments.length) {
                            node[path] = node[path] || {};
                            node = node[path];
                        } else {
                            node[path] = entry;
                        }
                    }
                }
                
                console.log(newPakFileDir);
                
                pakFile = newPakFile;
                pakFileDir = newPakFileDir;
            });
    }
    
    function handleView(event) {
        let node = event.detail.node;
        
        fileName = node.name();
        let isImage = fileName.endsWith('.png') || fileName.endsWith('.gif');
        let isText = fileName.endsWith('.txt') || fileName.endsWith('.xml');
        let isSound = fileName.endsWith('.ogg') || fileName.endsWith('.au');
        
        if(isImage) {
            fileType = 'image';
        } else if (isText) {
            fileType = 'text';
        } else if (isSound) {
            fileType = 'sound';
        } else{
            fileType = 'unknown';
        }
        
        fileData = node.readFileData();
    }
</script>
<div style="display:flex; flex-direction: column; flex: 1;">
    <div>
        <label for="load-file">Choose a PAK file:</label>
        <input type="file" id="load-file" name="load-file" on:change={loadFile}>
    </div>
    <div style="display: flex; flex: 1; overflow: hidden;">
        <div style="flex: 2; display: flex; flex-direction: column;">
            <h2>Directory</h2>
            <div style="flex-grow: 1; flex-basis: auto; overflow-y: scroll; height: 0px;">
                {#each Object.entries(pakFileDir) as [name, node]}
                    <DirectoryNode {name} {node} {PopCapPak} on:view={handleView}/>
                {/each}
            </div>
        </div>
        <div style="flex: 5; display: flex; align-items: center; justify-content: center;">
            {#if fileData != null}
                {#if fileType == 'image'}
                    <img alt={fileName} src={URL.createObjectURL(new Blob([fileData.buffer]))}/>
                {:else if fileType == 'text'}
                    {String.fromCharCode(...fileData)}
                {:else if fileType == 'sound'}
                    <audio controls="controls" src={URL.createObjectURL(new Blob([fileData.buffer]))} type="audio/mp3"/>
                {:else}
                    Unknown File Type
                {/if}
            {/if}
        </div>
    </div>
</div>