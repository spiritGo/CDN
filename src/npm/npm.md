# [npm](https://www.npmjs.com/) 是什么

_npm (node package manager) 是世界上最大的软件注册表, 它包含超过 600000 个包(即代码模块),包的结构使您能够轻松跟踪依赖项和版本_

**npm 由三个独立的部分组成**

- 网站
  - 网站是开发者查找包(package）、设置参数以及管理 npm 使用体验的主要途径。
- 注册表(registry)
  - 注册表是一个巨大的数据库，保存了每个包的信息。
- 命令行工具(CLI）
  - CLI 通过命令行或终端运行。开发者通过 CLI 与 npm 打交道。

**npm 可以干什么**

1. 使软件包适应您的应用程序，或者将它们合并成现在的样子。
1. 下载可以立即使用的独立工具。
1. 运行包而不使用 npx 下载。
1. 与任何 npm 用户，任何地方共享代码。
1. 将代码限制为特定的开发人员。
1. 组建虚拟团队。
1. 管理多个版本的代码和代码依赖项。
1. 更新基础代码时，可以轻松更新应用程序。
1. 发现解决同一难题的多种方法。
1. 查找其他正在处理类似问题的开发人员。

# npm 的使用

_要使用 `npm`,首先安装 `node.js`, node 本身自带 `npm`_

[Node.js 下载](https://nodejs.org/en/download/)

**`npm 常用命令`**

| 命令                            | 描述                                               |
| :------------------------------- | :-------------------------------------------------- |
| npm -v                          | 查看 npm 版本                                      |
| npm init                        | 创建 package.json 文件,初始字段内容手动填写        |
| npm init -y                     | 创建 package.json 文件,并初始化一些字段            |
| npm install <package_name>      | 安装一个包到当前目录                               |
| npm install <package_name> -S   | 将当前下载的包记录为生产环境到 package.json 文件中 |
| npm install <package_name> -D   | 将当前下载的包记录为开发环境到 package.json 文件中 |
| npm install <package_name> -g   | 安装一个包到全局                                   |
| npm install mpm -g              | 更新 npm 到全局                                    |
| npm install npm@latest -g       | 更新 npm 到全局                                    |
| npm install npm@next -g         | 更新为将要发布的版本到全局                         |
| npm update                      | 更新依赖包                                         |
| npm update -g                   | 全局更新依赖包                                     |
| npm uninstall <package_name>    | 删除 node_modules 目录下面的包                     |
| npm uninstall <package_name> -g | 全局删除依赖包                                     |
| npm uninstall <package_name> -S | 从 package.json 文件中删除依赖                     |
| npm uninstall <package_name> -D | 从 package.json 文件中删除依赖                     |

- -S 是 --save 的缩写, 指的是生产环境所需要的依赖
- -D 是 --save-dev 的缩写, 指的是开发环境所需要的依赖
- -g 是 -global 的缩写, 指的是全局参数
- -y 是 -yes 的缩写
- -v 是 -version 的缩写

目前就整理到这里, 如果还有别的有趣的命令欢迎评论区走一波
