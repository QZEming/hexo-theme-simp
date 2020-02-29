# hexo-theme-simp
一个简单的hexo主题模板  
目前只完成了导航栏，侧边狼，底部，回到顶部，文章目录，归档，分页这些简单的功能，后面会继续增加内容

## 下载  
在根目录下执行
```
git clone https://github.com/QZEming/hexo-theme-simp.git themes/simp
```
## 修改配置和使用
将根目录下的theme的值改为simp  
因为使用到了less，所以需要下载hexo-renderer-less
在根目录下执行
```
npm install hexo-renderer-less --save
```

## 改变语言
通过修改_config.yml下的i18n_dir可以修改页面部分内容使用的语言
现在可以设置的值有两个
en：英文（默认）
zh-tw；中文
相应可更换语言的词放在languages文件夹中

## 开启动画
通过修改主题下的_config.yml配置文件中的animation下的配置可以选择是否启用canvas动画
topCanvas设置左上角眼睛的动画是否开启
bgCanvas设置背景动画是否开启

## 侧边栏设置

### 标签分类默认显示数量设置
通过修改主题下的_config.yml配置文件中的tagsLen和categoriesLen可以设置默认允许显示的数量

## 404设置
通过修改主题下的_config.yml配置文件中的errorImg可以修改404时显示的图片


在此特别感谢某位不透露姓名的设计大佬给我提供的图片