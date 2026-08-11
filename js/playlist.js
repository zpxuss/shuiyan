// 检查 PlaylistAPI 是否存在，不存在则定义
if (typeof PlaylistAPI === 'undefined') {
    console.warn('PlaylistAPI 未定义，正在初始化...');
    
    // 从 localStorage 读取数据的简单实现
    const STORAGE_KEY = 'playlist';
    const DEFAULT_SONGS = [
		"谁", "Doll", "探窗", "婚约", "大喜", "谁家", "可能", "天才", "澎湃", "慢慢",
		"旋木", "像鱼", "暖暖", "大鱼", "苍耳", "走马", "平庸", "不怕", "再见", "记得",
		"续雪", "雨爱", "大眠", "贪慕", "年轮", "迷鹿", "借过", "我曾", "落款", "下潜",
		"演员", "她说", "撒野", "冬眠", "嘉宾", "侧脸", "过火", "夜车", "白羊", "传奇",
		"房间", "小孩", "直觉", "对视", "虚拟", "小半", "听海", "冲动", "i love u", "两三句",
		"燕回巷", "伯虎说", "广寒宫", "小年兽", "牵丝戏", "凑热闹", "苏州河", "口头禅",
		"我会等", "七月上", "闹哄哄", "试试吧", "声声慢", "可能否", "太委屈", "我想念",
		"愿与愁", "下雨了", "他不懂", "虹之间", "我走后", "想某人", "我害怕",
		"我和你", "虫儿飞", "相思遥", "时间轴", "追光者", "我知道", "我看过", "一点点",
		"小模样", "爱一点", "第一天", "小尾巴", "醉清风", "小幸运", "霸王别姬", "一笑倾城",
		"万有引力", "我想我会", "爱的魔法", "告白气球", "明天过后", "夏天的风", "气象站台",
		"小镇姑娘", "茶花开了", "连名带姓", "无人之岛", "字字句句", "忽而今夏", "说好不哭",
		"天外来物", "如果可以", "那个夏天", "寂寞烟火", "忘了没有", "想想念念", "颠倒之间",
		"好久不见", "忘记时间", "就忘了吧", "失落沙洲", "我很快乐", "不再联系", "像风一样",
		"身骑白马", "情字最大", "错位时空", "一路生花", "勾指起誓", "今夜有雨", "后会无期",
		"晴天和猫", "情非得已", "忽然之间", "熬夜上瘾", "一半一半", "荷塘月色", "明天，你好",
		"他乡的月亮", "辞九门回忆", "人间惊鸿宴", "新贵妃醉酒", "泼天的富贵", "爱的感叹号",
		"陪你看星星", "空山新雨后", "恶龙与小熊", "已经有我啦", "奇妙能力歌", "会呼吸的痛",
		"爱我还是他", "突然好想你", "想你时风起", "小了白了兔", "会开花的云", "没那么简单",
		"只是太爱你", "新梅花三弄", "亲爱的你啊", "踮起脚尖爱", "等一场大雨", "快乐的扑满",
		"阳光下的星星", "暗恋这件小事", "有可能的夜晚", "推开世界的门", "梦雨星海之间",
		"化身孤岛的鲸", "阿拉斯加海湾", "离开我的依赖", "如晴天似雨天", "我还有点小糊涂",
		"晚夜微雨问海棠", "请你吃个冰激凌", "白月光与朱砂痣", "像你这样的朋友",
		"酸酸甜甜就是我", "你的眼睛像星星", "好像要牵你的手", "山外小楼夜听雨",
		"这世界那么多人", "我期待的不是雪", "第57次取消发送", "我恨明月不照我",
		"我变了，我没变", "云朵变成棉花糖", "一个人想着一个人", "在加纳共和国离婚",
		"就让这大雨全都落下", "我多喜欢你，你会知道", "我喜欢你时内心的活动",
		"无论你多怪异我还是会喜欢你", "失控", "阿嬷", "宝贝", "褪黑素", "你是我的小狗",
		"老公公老婆婆", "小城夏天", "年", "消散对白", "爱笑的眼睛", "锁", "爱你", "睫毛弯弯",
		"爱如潮水", "爱的供养", "安静", "不完美的小孩", "泡沫", "多远都要在一起", "东京不太热",
		"当你", "关键词", "孤单北半球", "咖喱咖喱", "给我一首歌的时间", "红色高跟鞋", "画",
		"好想爱这个世界啊", "后来", "后会无期", "静悄悄", "交换余生", "可惜没如果", "落空",
		"魔法城堡", "麦浪", "慢冷", "童话", "绿色", "那女孩对我说", "明明就", "那天下雨了",
		"歡迎光臨", "青柠", "亲爱的那不是爱情", "热爱105°的你", "如果的事", "如果爱忘了",
		"太聪明", "天后", "天黑黑", "同手同脚", "踏浪", "修炼爱情", "雪落下的声音", "小情歌",
		"月牙湾", "云与海", "阳光彩虹小白马", "一个像夏天一个像秋天", "云烟成雨", "烟雨行舟",
		"疑心病", "有点甜", "奢香夫人", "一格格", "有何不可", "中毒", "爱就一个字", "枫叶城",
		"半壶纱", "不染", "赤岭", "春泥", "寄明月", "九张机", "浪人琵琶", "若梦", "童话镇",
		"蝴蝶泉边", "勾指起誓"
    ];

    window.PlaylistAPI = {
        get: function() {
            const stored = localStorage.getItem(STORAGE_KEY);
            if (stored) {
                try {
                    const data = JSON.parse(stored);
                    if (Array.isArray(data) && data.length > 0) {
                        return data;
                    }
                } catch (e) {}
            }
            // 初始化默认歌单
            const playlist = DEFAULT_SONGS.map(name => ({ name, genre: '流行' }));
            localStorage.setItem(STORAGE_KEY, JSON.stringify(playlist));
            return playlist;
        },
        save: function(playlist) {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(playlist));
        },
        reset: function() {
            const playlist = DEFAULT_SONGS.map(name => ({ name, genre: '流行' }));
            localStorage.setItem(STORAGE_KEY, JSON.stringify(playlist));
            return playlist;
        },
        add: function(name, genre) {
            if (!name || !name.trim()) throw new Error('歌名不能为空');
            const playlist = this.get();
            playlist.push({ name: name.trim(), genre: genre || '流行' });
            this.save(playlist);
            return playlist;
        },
        deleteByIndex: function(index) {
            const playlist = this.get();
            if (index < 0 || index >= playlist.length) throw new Error('索引越界');
            const deleted = playlist.splice(index, 1);
            this.save(playlist);
            return deleted[0];
        },
        update: function(index, newName, newGenre) {
            const playlist = this.get();
            if (index < 0 || index >= playlist.length) throw new Error('索引越界');
            if (newName && newName.trim()) playlist[index].name = newName.trim();
            if (newGenre && newGenre.trim()) playlist[index].genre = newGenre.trim();
            this.save(playlist);
            return playlist[index];
        },
        count: function() {
            return this.get().length;
        }
    };
}