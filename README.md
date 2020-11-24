# @autots/cra-ts-config
对使用 `create-react-app` 创建的 typescript 项目注入 lint 配置: `eslint`, `prettier`, `husky`, `lint-staged`           

创建指令:   
``` bash
npx create-react-app my-app --template typescript
```

## 使用
``` bash
npx @autots/cra-ts-config
```

该指令将创建配置文件, 安装依赖, 在 package.json 文件中增加 scripts 指令
``` bash
## 格式化 src 下所有 ts tsx 文件  
npm run format 
## 格式化 需跟 指定文件/目录
npm run format:diy ./src/App.tsx 
npm run format:diy ./src/**/*.{ts,tsx}
## lint src 下所有 ts tsx 文件  
npm run lint 
## lint 需跟 指定文件/目录
npm run lint:diy ./src/App.tsx 
npm run lint:diy ./src/**/*.{ts,tsx}
```

如果是旧项目中新增 lint 配置，不建议使用 `npm run lint` lint 所有文件，防止错误过多，影响进度和之前的逻辑。                     

当 `git commit` 时, 会先 lint/prettier 检测你的代码（有修改的文件，未修改的文件不检测）, 如果有不能自动 fixed 的错误时，会中断 commit 操作。然后你应该根据错误提示修改后再次提交。


## vscode 保存自动修复
下载插件 Prettier
setting.json 中
``` js
// ts tsx 文件格式化
"[typescript]": {
  "editor.formatOnSave": true,
},
"[typescriptreact]": {
  "editor.formatOnSave": true,
},
// eslint
"editor.codeActionsOnSave": {
  "source.fixAll.eslint": true
},
```

或者可以使用 editorconfig 插件，请自行了解。