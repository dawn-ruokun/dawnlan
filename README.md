简体中文 

<p>
<strong><h2>Dawnlan资源聚合网站</h2></strong>
将各类工具型网站聚合起来，方便使用，原理类似于收藏夹，可以这么理解。
    网站服务器由于一段时间忘记续费，导致很大一段数据丢失，不得不重新搭建，看起来十分不完善。请各位见谅！
        网站属于公益类型，没有任何广告，非盈利学习类网站。欢迎各位拉取项目搭建自己的网站！
            本项目会持续更新。
</p>

>主页的 Logo 字体已经过压缩，若用本站 Logo 以外的字母会变回默认字体，这里是 [完整字体](https://file.imsyy.top/font/Pacifico-Regular.ttf)

### Demo
>由于 CDN 缓存原因，查看最新效果可能需要 `Ctrl` + `F5` 强制刷新浏览器缓存

    <p>原项目开发- [無名の主页](https://github.com/imsyy/home)，原作者大佬已在n年前停止更新，因泛滥。
目前该项目属于公共PR阶段，我在n年前出于兴趣使然拉取该项目雏形做出了自己的第一个个人网站，后又在此基础上优化并添加代码变成如今的样子，
原项目已被各位大佬更新支持一键部署功能，各位按需拉取。
</p>

### 功能

- [x] 载入动画
- [x] 站点简介
- [x] Hitokoto 一言
- [x] 日期及时间
- [x] 实时天气
- [x] 时光进度条
- [x] 音乐播放器
- [x] 移动端适配
- [x] 搜索功能
* [ ] 还没想好呢


### 天气

由于原天气 API 不稳定，已更换天气 API，现需要前往以下网站获取 key
    
    天气类的api不太稳定，且定位有一点小问题，推荐前往高德开发者控制台获取高德的天气api。
- 前往 [ROLL](https://www.mxnzp.com/doc/list) 获取 app_id 和 app_secret，用于获取城市信息
- 前往 [和风天气](https://dev.qweather.com/) 获取 key，用于获取天气信息

也可自行更换其他方式

<!-- ### 配置

本项目可采用 `json` 文件来配置站点内容，该配置不受版本更新影响，可将自定义配置写入 `setting.json` 以更改页面内容

-->

### 音乐

 ！该音乐的框架有一些问题，可采用其它方案替代，达到自己喜欢的效果，对手机端的网页和缩小后的网页适配有一些问题，但没大影响，我保留了这个设计，因为他看起来很不错。
>本项目采用了基于 `MetingJS` 的 `Aplayer` 音乐播放器，可实现快速自定义歌单  

更改 `music.js` 的参数即可实现自定义歌单列表

```js
var server = "netease"; //netease: 网易云音乐; tencent: QQ音乐; kugou: 酷狗音乐; xiami: 虾米; kuwo: 酷我
var type = "playlist"; //song: 单曲; playlist: 歌单; album: 唱片
var id = "7452421335"; //封面 ID / 单曲 ID / 歌单 ID
```

### 字体
>由于本项目引入了中文字体，需要压缩中文字体以提高网页加载速度（ 也可以取消使用中文字体 ）

#### 中文字体去除繁体

- 安装 `Python 3.7` 和 `pip`
- 运行 `pip install fonttools`
- 下载 [sc_unicode.txt](https://gist.githubusercontent.com/imaegoo/d64e5088b723c2e02c40985f55ff12db/raw/5ebd2ce49418c73459a9dfe050483409306a6c1d/sc_unicode.txt)
- 运行 `pyftsubset 字体名称.ttf --unicodes-file=sc_unicode.txt`

#### 字体进一步压缩

- 编译安装 `Google woff2`

```bash
sudo apt-get install -y git g++ make
git clone --recursive https://github.com/google/woff2.git
cd woff2
make clean all
```

- 再压缩字体

```
./woff2_compress ./字体名称.ttf
```

- 最终可对原字体进行缓加载，**先行加载压缩后的字体**

>详细信息可前往 [虹墨空间站](https://www.imaegoo.com/2020/chinese-font-compress/) 查看原文

### 插件

* [Bootstrap](https://getbootstrap.com/)
* [iziToast](https://izitoast.marcelodolza.com/)
* [Font Awesome](https://fontawesome.com/)
* [jQuery](https://jquery.com/)
* [Aplayer](https://aplayer.js.org/)

### API
    部分api出现问题后我会更换，可能在此没有及时列出。
* [MetingAPI By 武恩赐](https://api.wuenci.com/meting/api/)
* [小歪 API](https://api.ixiaowai.cn/)
* [和风天气](https://dev.qweather.com/)
* [ROLL](https://www.mxnzp.com/doc/list)
* [Hitokoto 一言](https://hitokoto.cn/)<p>如果你不希望网站出现一些动漫里的社死台词，我希望你换一个。</p>
  

<a title="SSL" target="_blank" href="https://myssl.com/seal/detail?domain=www.dawnlan.top"><img src="https://img.shields.io/badge/MySSL-安全认证-brightgreen"></a>&nbsp;<a title="CDN" target="_blank" href="https://cdnjs.com/"><img src="https://img.shields.io/badge/CDN-Cloudflare-blue"></a>&nbsp;<a title="Copyright" target="_blank" href="https://www.dawnlan.top/"><img src="https://img.shields.io/badge/Copyright%20%C2%A9%202020--2022-%E7%84%A1%E5%90%8D-red"></a>
