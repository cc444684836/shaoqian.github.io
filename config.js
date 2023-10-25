// 霸都丶傲天 2019年10月10日 https://github.com/AJLoveChina/birthday
var config = {
    // 句子的长度可以任意， 你可以写十句话， 二十句话都可以
    // 每句话尽量不要超过15个字,不然展示效果可能不太好
    texts: [
        "送给我",      //这里,每句话结尾的最后一个逗号必须是英文的哦!! 很重要哦!!
        "喜欢的女孩",  // 同上...
        "邵倩",
        "今天是你的生日",
        "祝你,寿比南山大石头！",
        "福如东海老乌龟",
        "哈哈,开个玩笑",
        "愿你平安喜乐",
        "所念皆如愿",
        "无事绊心弦",
        "所以.......",
        "白头并非雪可替",
        "相识已是上上签",
        "最后.......",
        "祝你！",
        "生日快乐~~",
    ],
    /**
     * imgs 可以不填, 但是如果要填写的话必须遵循下面的格式
     * "对应上面的文字, 要完全一样" : "图片地址, 可以把图片放在imgs文件夹中"
     * 例如
     * "心爱的小可爱": "./imgs/xiaokeai.jpg"
     *
     * 如果不要图片的话, 直接在每行开头写两个斜杠注释即可, 例如下面的 "今天是你的生日" 的图片就不会展示了:)
     * Tip: 图片最好用正方形or接近正方形, 看起来效果更好
     */
    imgs: {
        "送给我": "./imgs/songxinxin.jpeg",
        "喜欢的女孩": "./imgs/xihuan.jpg",
        "邵倩": "./imgs/shenri.gif",
        "祝你,寿比南山大石头！": "./imgs/nanshan.jpg",
        "福如东海老乌龟": "./imgs/wugui.jpg",
        "哈哈,开个玩笑": "./imgs/yangzi.jpeg",
        "愿你平安喜乐": "./imgs/yuanni1.jpg",
        "所念皆如愿": "./imgs/yuanni2.jpg",
        "无事绊心弦": "./imgs/yuanni3.jpg",
        "所以.......": "./imgs/suoyi.jpg",
        "白头并非雪可替": "./imgs/123.jpg",
        "相识已是上上签": "./imgs/shangshangqian.jpg",
        "最后.......": "./imgs/wuyu.jpg",
        //"祝你！": "./imgs/1.jpg",
        "生日快乐~~": "./imgs/shengri.jpg"
    },
    
    // 按钮文字描述, 以下是默认的按钮文字，英文的，您可以改成你喜欢的文字
    desc: {
        turn_on: "请点击我",
        play: "请打开你的声音哦",
        bannar_coming: "接下来会发生什么呢",
        balloons_flying: "好像还少点东西",
        cake_fadein: "蛋糕！",
        light_candle: "蜡烛！",
        wish_message: "生日快乐～",
        story: "愿你每天过的快乐"
    },

    // 结束语
    loveText: '愿生日带给你的欢乐中蕴涵着一切美好~'
};
