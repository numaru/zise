# 📏 Zise

[https://numaru.github.io/zise](https://numaru.github.io/zise)

Zise is a web application which gives you an idea of which module consume the most rom and ram in an executable. It takes as input the result of the following command line `nm --line-numbers --print-size --portability path/to/exe.elf` and display the result in a tree table inspired by [WinDirStats](https://windirstat.net/). It requires the .elf file to be built with the debug symbols. You can do this with the `-g` [option of gcc](https://gcc.gnu.org/onlinedocs/gcc/Debugging-Options.html).

## Privacy

The website is a single page application deployed automatically as a github page. It does not send your data to a server to process it. You can run it locally without an internet access.

```bash
cd frontend
npm install && npm run dev
```
