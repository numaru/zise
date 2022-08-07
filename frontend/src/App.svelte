<script>
  import TextLoader from "./components/TextLoader.svelte";
  import TreeTable from "./components/TreeTable.svelte";
  import Path from "./libs/path";

  let nodes = [];
  let columns = [
    {
      field: "name",
      header: "Name",
      expander: true,
    },
    {
      field: "rom_size",
      header: "ROM Size",
      expander: false,
    },
    {
      field: "ram_size",
      header: "RAM Size",
      expander: false,
    },
  ];

  const idGenerator = (function* () {
    let i = 0;
    while (true) {
      yield i.toString();
      i++;
    }
  })();

  function onFileLoaded(event) {
    const symbols = event.detail;
    const dict = [];
    function addSymbol(dict, key, symbol) {
      const rom_size = "DdRrTt".includes(symbol.type) ? symbol.size ?? 0 : 0;
      const ram_size = "BbcDdGgSs".includes(symbol.type) ? symbol.size ?? 0 : 0;

      let children = dict;
      for (const k of key) {
        let node = children.find((e) => e.data.name === k);
        if (!node) {
          node = {
            key: idGenerator.next().value,
            data: { name: k, rom_size: 0, ram_size: 0 },
            children: [],
          };
          children.push(node);
        }
        node.data.rom_size += rom_size;
        node.data.ram_size += ram_size;
        children = node.children;
      }
      children.push({
        key: idGenerator.next().value,
        data: { name: symbol.name, rom_size: rom_size, ram_size: ram_size },
        children: [],
      });
    }

    for (const symbol of symbols) {
      let key = [];
      if (symbol.location) {
        const [path, line] = symbol.location.split(":");
        key = new Path(path).parts;
      } else {
        key.push("Unknown");
      }
      addSymbol(dict, key, symbol);
    }
    nodes = dict;
  }
</script>

<main>
  <a href="https://github.com/numaru/zise">Github</a>
  <p>
    Paste in the box bellow the result of:
    <code>nm --line-numbers --print-size --portability path/to/exe.elf</code>
  </p>
  <TextLoader on:file-loaded={onFileLoaded} />
  <br>
  <TreeTable {nodes} {columns} />
</main>
