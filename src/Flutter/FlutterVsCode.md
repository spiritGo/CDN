# 用 VS Code 开发 Flutter

> 请先安装 Flutter 插件, 侧边栏插件市场搜索安装

# VS Code 开发 Flutter 常用命令

- 创建 Flutter 项目

  `Ctrl+Shift+P` 在搜索栏里输入 `Flutter`, 选择 `New Project`, 填写项目名和选择项目存放地址就可以了

- 更新 Flutter

  `Ctrl+Shift+P` 在搜索栏里输入 `Flutter`, 选择 `Run Flutter Upgrade`

- 查看 Flutter 状态

  `Ctrl+Shift+P` 在搜索栏里输入 `Flutter`, 选择 `Run Flutter Doctor`

- 运行 Flutter 项目

  打开 VS Code 控制台, 输入 `flutter run` ( 控制台地址必须是项目根目录, 第一次运行可能会很慢, 它需要下载一些资源 )

  如果有多个模拟器, 可以 `flutter run -d 模拟器编号` 如: emulator-5556

  非命令行党可以点击顶部导航栏 Run, 选择 `Start Debugging` 或者 `Run Without Debugging`

- 刷新运行界面

  运行 flutter 后, 将鼠标移到控制台, 按字母 R 键刷新

  如果是顶部导航栏 Run 运行的界面支持热更新, 不用手动刷新

常用的基本就这些, 后面发现别的再加
