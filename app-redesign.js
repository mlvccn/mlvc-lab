/* ================================================================
   MLVC-Lab Website — Application Logic & Content Data
   ================================================================ */

// === RESEARCH DETAIL DATA ===
const researchDetails = {
  efficient: {
    title: '视觉模型压缩', en: 'Efficient Visual Learning', group: 'ml',
    keywords: ['知识蒸馏', '网络剪枝', '模型量化'],
    sections: [
      { id: 'eff', idx: '01', title: '研究背景与意义', copy: ['深度神经网络凭借复杂的网络结构和大规模参数，在图像分类、目标检测、语义分割、动作识别和视觉描述等任务中取得了优异性能，但其较大的模型规模、计算开销和内存占用，也限制了其在智能手机、嵌入式设备和其他资源受限平台上的部署，并难以满足部分实时视觉任务的低延迟需求。因此，实现模型轻量化与推理加速，对于边缘智能、移动视觉和实时智能系统的高效部署具有重要意义。'] },
      { id: 'eff', idx: '02', title: '方向介绍', copy: ['模型压缩主要研究如何在尽量保持模型性能的前提下，降低深度神经网络的模型规模、参数量和计算复杂度，从而提升推理效率并降低部署成本。该方向主要包括知识蒸馏、网络剪枝、模型量化、网络架构搜索和低秩分解等方法，其中重点关注知识蒸馏、网络剪枝和模型量化，通过知识迁移、冗余参数削减和低比特表示等方式，实现视觉模型的轻量化与高效部署。'] },
      { id: 'eff', idx: '03', title: '主要研究内容', topics: [
        { title: '知识蒸馏', items: ['响应蒸馏','特征蒸馏','关系蒸馏'] },
        { title: '网络剪枝', items: ['滤波器剪枝','层级剪枝','Token剪枝'] },
        { title: '模型量化', items: ['训练中量化','训练后量化'] }
      ]},
      { id: 'eff', idx: '04', title: '框图展示', framework: true },
      { id: 'eff', idx: '05', title: '典型应用', apps: [
        { title: '移动端智能视觉', desc: '在移动终端上实现低延迟视觉推理。' },
        { title: '无人机视觉系统', desc: '在有限算力条件下完成检测与识别。' },
        { title: '机器人感知', desc: '降低实时环境理解的计算成本。' },
        { title: '边缘智能设备', desc: '支持智能摄像头和嵌入式视觉终端。' },
        { title: '大模型高效部署', desc: '降低大型视觉模型的推理与存储成本。' }
      ]}
    ]
  },
  trustworthy: {
    title: '视觉模型安全', en: 'Trustworthy Visual AI', group: 'ml',
    keywords: ['对抗攻防', '后门攻防', '鲁棒学习', '模型安全'],
    sections: [
      { id: 'tr', idx: '01', title: '研究背景与意义', copy: ['深度学习已广泛应用于图像分类、语义分割、目标检测、动作识别、目标追踪以及大模型等视觉与智能任务，并逐步进入自动驾驶、人脸识别、机器人和智能监控等安全关键场景。然而，研究表明，深度模型容易受到对抗攻击：攻击者仅需在图像或视频中加入人眼难以察觉的微小扰动，就可能使模型产生错误预测，暴露出深度学习系统在安全性与鲁棒性方面的潜在风险。','随着人工智能在现实关键系统中的应用不断深入，模型是否能够在恶意攻击和复杂环境下保持稳定、可靠的决策能力变得尤为重要。因此，研究深度模型的对抗脆弱性及其防御机制，对于提升人工智能系统的安全性、鲁棒性与可信性，保障其在自动驾驶、身份认证、智能安防及大模型等场景中的可靠应用具有重要意义。'] },
      { id: 'tr', idx: '02', title: '方向介绍', copy: ['模型安全主要研究视觉模型与大模型在开放和恶意环境下的安全性、鲁棒性与可信性问题，重点涵盖视觉对抗攻防、后门攻防以及大模型安全等研究内容。通过构造对抗扰动、后门触发器等攻击方式，分析深度模型在输入、训练过程和决策机制中的潜在安全脆弱性，并进一步研究对抗训练、输入净化、攻击检测、后门检测与模型修复等防御方法，提升模型面对恶意攻击时的稳定性与可靠性。同时，面向视觉语言模型和生成式大模型，研究越狱攻击、跨模态攻击及安全防护等问题，为构建安全、鲁棒、可信的人工智能系统提供理论与技术支撑。'] },
      { id: 'tr', idx: '03', title: '主要研究内容', topics: [
        { title: '对抗攻击', items: ['白盒对抗攻击','黑盒对抗攻击','查询式攻击','对抗迁移攻击'] },
        { title: '对抗防御', items: ['对抗训练','输入净化','扰动检测','鲁棒表示学习'] },
        { title: '后门攻防', items: ['数据投毒','后门触发器设计','后门检测','后门模型修复'] }
      ]},
      { id: 'tr', idx: '04', title: '框图展示', framework: { img: 'fig/方向介绍图/视觉模型安全中的典型攻防流程.png', alt: '视觉模型安全中的典型攻防流程', caption: '视觉模型安全中的典型攻防流程：迁移攻击利用代理模型生成可迁移的对抗扰动，查询攻击则通过反复查询目标模型并依据反馈迭代优化扰动，最终诱导目标模型产生错误预测。针对上述攻击，可通过对抗训练提升模型自身鲁棒性，或通过对抗净化去除输入中的恶意扰动，从而增强模型在复杂攻击环境下的安全性与可靠性。' } },
      { id: 'tr', idx: '05', title: '典型应用', apps: [
        { title: '国防军工目标追踪与检测', desc: '提升智能识别系统面对恶意干扰时的安全性。' },
        { title: '智慧城市与安防', desc: '增强监控与识别系统在复杂环境中的鲁棒性。' },
        { title: '人脸鉴别', desc: '防止对抗扰动影响身份认证结果。' },
        { title: '自动驾驶', desc: '增强交通标志、车辆和行人识别的安全可靠性。' },
        { title: '大模型安全', desc: '研究视觉语言模型和多模态模型的安全风险。' }
      ]}
    ]
  },
  'open-data': {
    title: '开放与数据集压缩', en: 'Open-set & Dataset Compression', group: 'ml',
    keywords: ['数据集压缩', '小样本', '零样本', '开放域学习'],
    sections: [
      { id: 'od', idx: '01', title: '研究背景与意义', copy: ['传统深度学习通常依赖大规模人工标注数据，并假设训练阶段与测试阶段具有相对固定的类别空间。然而真实世界中的视觉数据具有标注成本高、长尾分布明显、新类别不断出现等特点。','因此，人工智能模型需要逐渐从依赖大量标注数据学习固定类别，发展为能够利用有限数据快速学习，并在开放环境中识别未知类别、适应新任务的智能系统。数据高效学习与开放环境学习对于提升人工智能的泛化能力、自主学习能力和环境适应能力具有重要意义。'] },
      { id: 'od', idx: '02', title: '方向介绍', copy: ['本方向主要研究有限数据与开放环境下的视觉学习问题，重点涵盖数据集压缩、小样本学习、零样本学习以及开放域学习等研究内容。数据集压缩旨在从大规模训练数据中提取或构造少量具有代表性和高信息密度的样本，在显著降低数据存储与训练成本的同时，尽可能保持模型性能；小样本与零样本学习则研究模型如何利用有限样本或语义知识快速认识新的类别；开放域学习进一步关注模型在真实开放环境中对未知类别的识别、发现与持续适应能力。通过上述研究，提升视觉模型在数据受限、类别动态变化和未知环境中的学习效率与泛化能力。'] },
      { id: 'od', idx: '03', title: '主要研究内容', topics: [
        { title: '数据集压缩', items: ['轨迹蒸馏','梯度蒸馏','分布蒸馏'] },
        { title: '小样本学习', items: ['Few-shot Learning','Meta Learning','Prototype Learning'] },
        { title: '零样本学习', items: ['Zero-shot Learning','Vision-Language Learning','Prompt Learning'] },
        { title: '开放环境学习', items: ['Open-set Recognition','Open-world Learning','Unknown Detection','Incremental Learning'] }
      ]},
      { id: 'od', idx: '04', title: '框图展示', framework: true },
      { id: 'od', idx: '05', title: '典型应用', apps: [
        { title: '医学影像', desc: '在有限专业标注数据条件下进行视觉学习。' },
        { title: '异常检测', desc: '发现训练数据中从未出现的异常目标。' },
        { title: '资源受限场景', desc: '降低大规模数据采集与标注成本。' }
      ]}
    ]
  },
  video: {
    title: '视频理解', en: 'Video Understanding', group: 'vc',
    keywords: ['动作识别', '动作检测', '视频定位'],
    sections: [
      { id: 'vid', idx: '01', title: '研究背景与意义', copy: ['视频是现实世界动态信息的重要载体，除了人物、物体和场景等空间信息，还包含丰富的运动变化、时间关系、行为交互和事件演化过程。随着视频数据规模不断增长，如何自动识别视频中的动作与事件，并准确判断其发生时间和空间位置，成为计算机视觉领域的重要研究问题。','视频理解能够为智能安防、体育分析、视频检索和机器人感知提供基础能力。与静态图像分析相比，该方向更加关注连续帧之间的时序关联、动作演化和目标交互，从而实现对复杂动态场景的细粒度理解。'] },
      { id: 'vid', idx: '02', title: '方向介绍', copy: ['视频理解主要研究从连续、未剪辑的视频中自动识别人物行为和事件内容，并建立视频内容与时间、空间位置之间的对应关系。研究内容包括动作识别、动作检测和视频定位三个方面。','其中，动作识别关注视频中发生的动作类别；动作检测进一步确定动作的起止时间，或定位动作在视频帧中的空间位置；视频定位则根据视频内容或查询语义，在长视频中找到相关的时序片段或时空区域。'] },
      { id: 'vid', idx: '03', title: '主要研究内容', topics: [
        { title: '动作识别', items: ['视频级动作分类','细粒度动作识别','时序特征建模','长视频动作理解'] },
        { title: '动作检测', items: ['动作类别识别','动作起止时间定位','时序动作检测','时空动作检测'] },
        { title: '视频定位', items: ['时序视频定位','时空视频定位','跨模态语义对齐','长视频目标片段检索'] }
      ]},
      { id: 'vid', idx: '04', title: '框图展示', framework: true },
      { id: 'vid', idx: '05', title: '典型应用', apps: [
        { title: '智慧安防', desc: '识别监控视频中的异常行为、人员活动和危险事件。' },
        { title: '体育分析', desc: '理解运动员动作、比赛过程和关键事件。' },
        { title: '视频检索', desc: '根据视频内容或查询语义快速定位长视频中的目标片段。' },
        { title: '无人系统', desc: '理解动态环境中的人物行为、事件及目标交互。' },
        { title: '智能监控', desc: '识别监控视频中的动作、事件和异常行为。' }
      ]}
    ]
  },
  '3d': {
    title: '点云动作分析与分割', en: 'Point Cloud Action Analysis & Segmentation', group: 'vc',
    keywords: ['点云动作分析', '点云分割'],
    sections: [
      { id: 'pc', idx: '01', title: '研究背景与意义', copy: ['真实世界具有天然的三维空间结构，仅依赖二维图像难以完整描述目标的深度、几何形状和空间关系。随着激光雷达、深度相机等三维传感设备的发展，点云已成为机器人、自动驾驶、人体行为分析和三维场景理解的重要数据形式。','动态点云同时包含空间结构与运动变化，能够为人体动作分析和目标行为理解提供细粒度信息；点云分割则为三维目标识别、场景解析和空间交互提供基础支撑。'] },
      { id: 'pc', idx: '02', title: '方向介绍', copy: ['点云动作分析与分割主要利用静态或动态点云理解人体运动、目标结构和三维场景。点云动作分析关注人体或目标在三维空间中的运动变化，通过时空建模实现动作识别与行为理解；点云分割则学习点云的局部几何结构和全局语义关系，对目标、部件及场景区域进行精细划分。','该方向重点研究三维几何表示、动态点云建模、时空特征学习和点云语义理解，为机器人感知、自动驾驶和三维智能交互提供技术基础。'] },
      { id: 'pc', idx: '03', title: '主要研究内容', topics: [
        { title: '点云动作分析', items: ['三维人体动作识别','动态点云建模','时空特征学习','三维行为理解'] },
        { title: '点云分割', items: ['点级语义分割','实例分割','部件分割','三维场景解析'] }
      ]},
      { id: 'pc', idx: '04', title: '框图展示', framework: true },
      { id: 'pc', idx: '05', title: '典型应用', apps: [
        { title: '三维人体行为分析', desc: '利用动态点云识别和理解人体动作。' },
        { title: '机器人感知', desc: '理解机器人周围的三维空间、目标及运动状态。' },
        { title: '自动驾驶', desc: '对车辆、行人和道路环境进行三维空间感知。' },
        { title: '智慧城市', desc: '对复杂城市环境中的三维目标和场景进行理解。' },
        { title: '数字孪生', desc: '实现真实环境的三维建模、分割与语义理解。' }
      ]}
    ]
  },
  multimodal: {
    title: '语义分割', en: 'Semantic Segmentation', group: 'vc',
    keywords: ['RGB-T/D', '参考图像分割'],
    sections: [
      { id: 'mm', idx: '01', title: '研究背景与意义', copy: ['语义分割通过对图像或视频中的每个像素进行语义分类，实现对目标形状、结构和边界的精细理解，是连接底层视觉感知与高层场景理解的重要基础。相比单一 RGB 图像，红外和深度信息能够在弱光、遮挡和复杂环境中提供互补线索。','参考图像分割进一步利用参考图像中的目标外观、类别或实例信息，在目标类别不固定、场景变化明显的情况下完成像素级目标理解，对复杂场景感知和灵活视觉交互具有重要意义。'] },
      { id: 'mm', idx: '02', title: '方向介绍', copy: ['语义分割方向主要研究 RGB、红外和深度等多源视觉信息融合，以及参考图像引导下的目标分割。RGB-T/D 分割通过对齐和融合不同模态的外观、热辐射与几何信息，提升模型在夜间、弱光、遮挡和复杂背景中的分割能力。','参考图像分割则根据参考图像提供的目标线索，在查询图像或视频中找到并分割对应目标，重点关注跨图像匹配、目标表征和像素级边界预测。'] },
      { id: 'mm', idx: '03', title: '主要研究内容', topics: [
        { title: 'RGB-T/D 多模态分割', items: ['RGB + Thermal','RGB + Depth','跨模态特征对齐与融合','弱光与复杂环境感知'] },
        { title: '参考图像分割', items: ['参考目标表征','跨图像目标匹配','视觉特征融合','像素级边界预测'] }
      ]},
      { id: 'mm', idx: '04', title: '框图展示', framework: true },
      { id: 'mm', idx: '05', title: '典型应用', apps: [
        { title: '夜间智慧安防', desc: '融合 RGB 与红外信息，提高弱光和夜间环境中的目标分割能力。' },
        { title: '自动驾驶', desc: '融合视觉、时间和深度信息，对动态道路场景进行精细感知。' },
        { title: '机器人视觉', desc: '利用多模态传感信息理解复杂动态环境。' },
        { title: '参考图像检索', desc: '根据参考图像在复杂场景中定位并分割对应目标。' },
        { title: '复杂场景理解', desc: '通过多模态视觉信息提升复杂环境中的像素级感知能力。' }
      ]}
    ]
  }
};

// === STUDENT DATA ===
const currentStudents = [
  { name:'刘钧宇', year:'2024 级硕士生', email:'ljycs@hdu.edu.cn', link:'https://openreview.net/profile?id=%7EJunyu_Liu9', research:'时空动作检测' },
  { name:'田绍启', year:'2024 级硕士生', email:'tsq@hdu.edu.cn', link:'https://openreview.net/profile?id=%7EShaoqi_Tian1', research:'点云动作分析' },
  { name:'尚立杰', year:'2024 级硕士生', email:'sljcs@hud.edu.cn', link:'https://openreview.net/profile?id=%7ELijie_Shang1', research:'多模态大模型对抗攻防' },
  { name:'李逸凡', year:'2024 级硕士生', email:'lyfcs@hdu.edu.cn', link:'https://openreview.net/profile?id=%7ELi_Yifan3', research:'视觉网络量化与数据集蒸馏' },
  { name:'郭晓晨', year:'2024 级硕士生', email:'242050288@hdu.edu.cn', link:'https://openreview.net/profile?id=%7EXiaochen_Guo2', research:'人物交互检测' },
  { name:'陈宇安', year:'2024 级硕士生', email:'cya@hdu.edu.cn', link:'https://openreview.net/profile?id=%7EYuAn_Chen15', research:'视频定位' },
  { name:'周伟超', year:'2024 级硕士生', email:'zwc@hdu.edu.cn', link:'https://openreview.net/profile?id=%7EWeichao_Zhou2', research:'参考图像分割' },
  { name:'洪文锦', year:'2025 级硕士生', email:'hwjcs@hdu.edu.cn', link:'https://openreview.net/profile?id=%7EWenjin_Hong1', research:'视觉对抗攻防' },
  { name:'夏韦', year:'2025 级硕士生', email:'xw@hdu.edu.cn', link:'https://openreview.net/profile?id=%7EWei_Xia19', research:'视觉后门攻防' },
  { name:'门嘉辰', year:'2025 级硕士生', email:'mjc@hdu.edu.cn', link:'https://openreview.net/profile?id=~Jiachen_Men1', research:'时空动作检测' },
  { name:'林芸', year:'2025 级硕士生', email:'lycs@hdu.edu.cn', link:'https://openreview.net/profile?id=%7EYun_Lin5', research:'点云语义分割' },
  { name:'季新叶', year:'2025 级硕士生', email:'jxycs@hdu.edu.cn', link:'https://openreview.net/profile?id=%7EXinye_Ji1', research:'视觉模型剪枝与量化' },
  { name:'张真玮', year:'2025 级硕士生', email:'zzwcs@hdu.edu.cn', link:'https://openreview.net/profile?id=%7EZhenwei_Zhang6', research:'视觉数据集压缩' },
  { name:'梁石根', year:'2026 级硕士生', email:null, link:null, research:'时空动作检测' },
  { name:'胡新俊', year:'2026 级硕士生', email:null, link:null, research:'视觉对抗攻防' },
  { name:'陈世军', year:'2026 级硕士生', email:null, link:null, research:'视觉模型压缩' }
];

const graduates = [
  { year:'2026届', members:[{n:'平晨昊',d:'阿里'},{n:'林凡罡',d:'快手'},{n:'何凌风',d:'华为'},{n:'唐晨',d:'华为'},{n:'庞博',d:'零跑'},{n:'杨若凡',d:'美团'},{n:'潘杰',d:'新华三'}] },
  { year:'2025届', members:[{n:'叶浩宇',d:'腾讯'},{n:'洪宇',d:'腾讯'},{n:'周东',d:'蚂蚁'},{n:'倪家楠',d:'华为'},{n:'谢宇豪',d:'快手'},{n:'秦雨雨',d:'人民银行软发'}] },
  { year:'2024届', members:[{n:'孙语韬',d:'读博深造'},{n:'黄志强',d:'武警士官学校'},{n:'叶兴超',d:'华为'},{n:'陈家俊',d:'大华'},{n:'王涛',d:'浙江公共安全研究院'},{n:'杨钧彦',d:'嘉兴金融管理局'}] },
  { year:'2023届', members:[{n:'黄一乘',d:'阿里'},{n:'支世腾',d:'猿辅导'},{n:'陶泓宇',d:'快手'},{n:'邱磊磊',d:'华为'},{n:'张陈翰',d:'公务员选调'}] },
  { year:'2022届', members:[{n:'史文武',d:'网易'},{n:'曹佳晨',d:'网易'},{n:'袁炜祺',d:'海康'},{n:'张宇',d:'同花顺'},{n:'朱佳超',d:'蔚来汽车'}] },
  { year:'2021届', members:[{n:'赵国潘',d:'网易'},{n:'梁颖',d:'美团'},{n:'薛亮',d:'滴滴'},{n:'胡杰',d:'滴滴'},{n:'刘永攀',d:'哔哩哔哩'},{n:'冉现源',d:'有赞'},{n:'张盼',d:'浙商银行软开'}] }
];

// === PUBLICATION DATA ===
const featuredPapers = [
  { img:'fig/paper_framework/Channel-wise dynamic knowledge distillation via adaptive sample generation for action recognition.png', alt:'ASCD framework', citeHtml:'Ping Li, Chenhao Ping, Jie Song, Mingli Song. <strong>Channel-wise dynamic knowledge distillation via adaptive sample generation for action recognition</strong>. In <em>ACM MM</em>, Rio de Janeiro, Brazil, 2026.', summary:'该工作面向动作识别中的模型压缩与知识迁移问题，提出基于自适应样本生成的通道级动态知识蒸馏框架。方法针对不同样本和不同通道的重要性进行细粒度建模，在蒸馏过程中动态强化判别性通道信息，从而更有效地传递教师模型的时空表征能力，提升轻量学生模型在复杂动作场景下的识别性能。', paper:'https://arxiv.org/pdf/2608.03100', code:'https://github.com/mlvccn/ASCD_KD_Action' },
  { img:'fig/paper_framework/Triple-View Knowledge Distillation for Semi-Supervised Semantic Segmentation.png', alt:'TriKD framework', citeHtml:'Ping Li, Junjie Chen, Li Yuan, Xianghua Xu, Mingli Song. <strong>Triple-view knowledge distillation for semi-supervised semantic segmentation</strong>. <em>IEEE Transactions on Multimedia (TMM)</em>, 28, 2026: 1511 - 1522.', summary:'通过三视角知识蒸馏缓解半监督语义分割中的标注稀缺问题，同时从多视角交互中挖掘互补信息。方法兼顾全局语义一致性、局部边界细节建模与跨视角协同学习，在复杂场景下进一步提升分割精度、泛化能力与训练稳定性。', paper:'https://ieeexplore.ieee.org/document/11275880', code:'https://ieeexplore.ieee.org/document/11275880' },
  { img:'fig/paper_framework/Sample-level adaptive knowledge distillation for action recognition..png', alt:'SAKD framework', citeHtml:'Ping Li, Chenhao Ping, Wenxiao Wang, Mingli Song. <strong>Sample-level adaptive knowledge distillation for action recognition</strong>. In <em>ACM MM</em>, Dublin, Ireland, 2025:544-552.', summary:'针对动作识别任务设计样本级自适应知识蒸馏机制，按照样本难度动态调整蒸馏强度，从而更有效地传递教师网络的细粒度判别信息并提升模型泛化能力。', paper:'https://dl.acm.org/doi/epdf/10.1145/3746027.3755514', code:'https://github.com/mlvccn/SAKD_ActionRec' },
  { img:'fig/paper_framework/Temporal consistency constrained transferable adversarial attacks with background mixup for action recognition.png', alt:'BMTC framework', citeHtml:'Ping Li, Jianan Ni, Bo Pang. <strong>Temporal consistency constrained transferable adversarial attacks with background mixup for action recognition</strong>. In <em>IJCAI</em>, Montreal, Canada, 2025:1413-1421.', summary:'融合时序一致性约束与背景混合策略，在尽量保持动作语义完整性的同时增强对动作识别模型的可迁移对抗攻击能力，并提升跨模型攻击的稳定性。', paper:'https://www.ijcai.org/proceedings/2025/0158.pdf', code:'https://github.com/mlvccn/BMTC_TransferAttackVid' }
];

const otherPapers = [
  'Ping Li, Xingchao Ye, Lingfeng He. <strong>Coarse-to-fine hypergraph network for spatiotemporal action detection</strong>. <em>IEEE Transactions on Circuits and Systems for Video Technology (TCSVT)</em>, 35(9), 2025: 8653 - 8665.',
  'Ping Li, Tao Wang, Xinkui Zhao, Xianghua Xu, Mingli Song. <strong>Pseudo-labeling with keyword refining for few-supervised video captioning</strong>. <em>Pattern Recognition (PR)</em>, Vol. 159, 2025: 111176.',
  'Ping Li, Jiajun Chen, Lijie Shang, Chenhao Ping. <strong>Adaptive saliency based contextual metric learning for few-shot open-set recognition</strong>. <em>Pattern Recognition (PR)</em>, Vol. 175, 2026: 113096.',
  'Ping Li, Yu Zhang, Li Yuan, Jian Zhao, Xianghua Xu, Xiaoqin Zhang. <strong>Adversarial attacks on video object segmentation with hard region discovery</strong>. <em>IEEE Transactions on Circuits and Systems for Video Technology (TCSVT)</em>, Vol. 34, No.6, 2024:5049-5062.',
  'Ping Li, Yu Zhang, Li Yuan, Huaxin Xiao, Binbin Lin, Xianghua Xu. <strong>Efficient long-short temporal attention network for unsupervised video object segmentation</strong>. <em>Pattern Recognition (PR)</em>, Vol.146, 2024:110078.',
  'Ping Li, Chenhan Zhang, Xianghua Xu. <strong>Fast fourier inception networks for occluded video prediction</strong>. <em>IEEE Transactions on Multimedia (TMM)</em>, Vol. 26, 2024:3418-3429.'
];

const patents = [
  '一种基于元类基学习器的行人重识别集成方法. 专利号：ZL201911044411.X 授权公告号：CN110941994B',
  '一种双流神经网络时序动作定位方法. 专利号：ZL201911044384.6 授权公告号：CN111027377B',
  '一种基于层次注意力机制的双向重构网络视频描述方法. 专利号：ZL201911045154.1 授权公告号：CN110929587B',
  '一种基于生成对抗网络的视频目标分割方法. 专利号：ZL201911045144.8 授权公告号：CN110942463B',
  '一种基于文本自编码器的视频内容描述方法. 专利号：ZL201911108029.0 授权公告号：CN111079532B',
  '一种基于困难感知的深度集成度量图像检索方法. 专利号：ZL202010239731.7 授权公告号：CN111506760B',
  '面向无人驾驶的前背景编解码器网络目标提取方法. 专利号：ZL202010239732.1 授权公告号：CN111476133B',
  '基于尺度注意力空洞卷积网络的视频动作检测方法. 专利号：ZL202010252104.7 授权公告号：CN111611847B',
  '一种基于边界搜索智能体的时序动作片段分割方法. 专利号：ZL202010722304.4 授权公告号：CN111950393B',
  '一种基于多时间步金字塔编解码器的目标跟踪方法. 专利号：ZL202011154966.2 授权公告号：CN112288776B',
  '一种基于双流卷积注意力的动作识别方法. 专利号：ZL202110116862.0 授权公告号：CN112926396B',
  '一种基于贝叶斯记忆的层次级联视频目标分割方法. 专利号：ZL202110297438.0 授权公告号：CN113139966B',
  '基于双尺度时空分块互注意力的课堂动作识别方法. 专利号：ZL202110518525.4 授权公告号：CN113408343B',
  '基于时空传播层次编解码器的视频预测方法. 专利号：ZL202110534056.5 授权公告号：CN113422952B',
  '基于时序高斯混合空洞卷积的语义重构视频描述方法. 专利号：ZL202110704646.8 授权公告号：CN113420179B',
  '利用多频动态空洞卷积的视频语义分割方法. 专利号：ZL202110718738.1 授权公告号：CN113538357B',
  '基于目标空间语义对齐的视频描述方法. 专利号：ZL202111404350.0 授权公告号：CN114154016B',
  '处理多种先验知识的自适应视频目标分割方法. 专利号：ZL202210105882.2 授权公告号：CN114494297B',
  '基于非对称交叉融合的多光谱图像语义分割方法. 专利号：ZL202210111951.0 授权公告号：CN114445442B',
  '基于时序校正卷积的视频预测方法. 专利号：ZL202210463423.1 授权公告号：CN114758282B',
  '基于渐进注意力超图的视频时空动作定位方法. 专利号：ZL202210481572.0 授权公告号：CN114882403B',
  '基于离散余弦变换的视频目标分割对抗攻击方法. 专利号：ZL202210481562.7 授权公告号：CN114821432B',
  '基于坐标注意力群组优化的小样本目标检测方法. 专利号：ZL202210697675.0 授权公告号：CN115019103B',
  '基于自约束动态文本特征的无监督视频描述方法. 专利号：ZL2023101107842 授权公告号：CN116109978B',
  '基于峰值区域自适应扩散的视频时空动作检测方法. 专利号：ZL2023101388390 授权公告号：CN116109984B',
  '基于低维对比自适应的小样本开放集图像识别方法. 专利号：ZL2023101153520 授权公告号：CN115984630',
  '基于时空自注意力单步扰动的视频预测防御方法. 专利号：ZL2023108516101 授权公告号：CN116863379B',
  '基于多尺度时空特征蒸馏的动作识别方法. 专利号：ZL2023108725234 授权公告号：CN116883902B',
  '基于渐进式少样本知识蒸馏的动作识别方法. 专利号：ZL2024105489997 授权公告号：CN118314504B',
  '基于时序对抗融合的动作检测查询攻击方法. 专利号：ZL2024106561446 授权公告号：CN118506239B',
  '基于模态分歧差异融合的多光谱图像语义分割方法. 专利号：ZL2024109469776 授权公告号：CN118485835B',
  '基于自适应梯度时序特征剪枝的动作识别迁移攻击方法. 专利号：ZL202411068035.9 授权公告号：CN118587561B',
  '基于前景语义增强的双路多标记时空动作检测方法. 专利号：ZL2024114207326 授权公告号：CN118942162B',
  '基于层次化动态融合网络剪枝的动作识别模型轻量化方法. 专利号：2025105453203 授权公告号：CN118942162B',
  '基于空域频域流多源对抗训练的动作识别防御方法. 专利号：ZL2025107366430 授权公告号：CN120260138B',
  '基于跨数据视图协同训练的RGB-D图像语义分割方法. 专利号：ZL2025109352663 授权公告号：CN120431583B',
  '基于重构双流标记匹配的弱监督时空动作检测方法和装置. 专利号：ZL2025109578848 授权公告号：CN120451881B'
];

const activities = [
  { img: 'fig/团建活动/20240324春游.jpeg', title: '宝石山春游', date: '2024.03.24', alt: 'MLVC 春游团建合影' },
  { img: 'fig/团建活动/20241201钱塘江边毅行.jpeg', title: '钱塘江边毅行', date: '2024.12.01', alt: 'MLVC 钱塘江边毅行合影' },
  { img: 'fig/团建活动/20250323九溪徒步.jpeg', title: '九溪徒步', date: '2025.03.23', alt: 'MLVC 九溪徒步合影' },
  { img: 'fig/团建活动/20251026北高峰团建.jpeg', title: '北高峰爬山', date: '2025.10.26', alt: 'MLVC 北高峰团建合影' },
  { img: 'fig/团建活动/20251123消防主题公园团建.jpeg', title: '消防主题公园团建', date: '2025.11.23', alt: 'MLVC 消防主题公园团建合影' },
  { img: 'fig/团建活动/20260202新年团建.jpeg', title: '新年团聚', date: '2026.02.02', alt: 'MLVC 新年团建合影' },
  { img: 'fig/团建活动/20260426钱塘江团建.jpeg', title: '钱塘江野餐', date: '2026.04.26', alt: 'MLVC 钱塘江团建合影' }
];

const academicActivities = [
  { img: 'fig/学术活动/第二十一届中国机器学习及其应用研讨会（MLA2024）.jpeg', title: '第二十一届中国机器学习及其应用研讨会', date: '2023', alt: 'MLA 2024 研讨会' },
  { img: 'fig/学术活动/MLA2024.jpeg', title: '第二十二届中国机器学习及其应用研讨会', date: '2024', alt: 'MLA 2024 学术活动' },
  { img: 'fig/学术活动/第二十二届中国机器学习及其应用研讨会（MLA2024）.jpeg', title: '第二十二届中国机器学习及其应用研讨会', date: '2024', alt: 'MLA 2024 研讨会' },
  { img: 'fig/学术活动/第二十三届中国机器学习及其应用研讨会（MLA2025）.jpeg', title: '第二十三届中国机器学习及其应用研讨会', date: '2025', alt: 'MLA 2025 研讨会' }
];

// === SVG ICONS ===
const icons = {
  back: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="15 18 9 12 15 6"/></svg>',
  doc: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>',
  code: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>'
};

// === RENDER FUNCTIONS ===
function renderDetailSection(s, extraClass = '') {
  let html = `<section class="detail-section${extraClass ? ` ${extraClass}` : ''}"><div class="detail-section-header"><span class="detail-section-index">${s.idx}</span><h4 class="detail-section-title">${s.title}</h4></div>`;
  if (s.copy) {
    html += `<div class="detail-copy">${s.copy.map(p => `<p>${p}</p>`).join('')}</div>`;
  }
  if (s.topics) {
    html += `<div class="topic-grid">${s.topics.map(t => `<div class="topic-group"><h5 class="topic-group-title">${t.title}</h5><ul class="topic-list">${t.items.map(i => `<li class="topic-item">${i}</li>`).join('')}</ul></div>`).join('')}</div>`;
  }
  if (s.framework) {
    if (typeof s.framework === 'object') {
      html += `<figure class="framework-figure"><img class="framework-image" src="${s.framework.img}" alt="${s.framework.alt}"><figcaption class="framework-caption">${s.framework.caption}</figcaption></figure>`;
    } else {
      html += `<div class="framework-placeholder"><p class="framework-placeholder-label">研究框图</p><p class="framework-placeholder-hint">Framework figure will be added later.</p></div>`;
    }
  }
  if (s.apps) {
    html += `<div class="app-grid">${s.apps.map(a => `<article class="app-card"><h5 class="app-card-title">${a.title}</h5><p class="app-card-desc">${a.desc}</p></article>`).join('')}</div>`;
  }
  html += `</section>`;
  return html;
}

function renderResearchDetail(key) {
  const d = researchDetails[key];
  if (!d) return '';
  const heroClass = d.group === 'ml' ? 'detail-hero--ml' : 'detail-hero--vc';
  let html = `<article class="research-detail is-active" data-research-panel="${key}">`;
  html += `<button class="research-back" type="button" data-research-back>${icons.back}返回研究方向</button>`;
  html += `<div class="detail-hero ${heroClass}"><h3 class="detail-hero-title" tabindex="-1">${d.title}</h3><p class="detail-hero-en">${d.en}</p><div class="detail-hero-keywords">${d.keywords.map(k => `<span class="tag">${k}</span>`).join('')}</div></div>`;
  d.sections.forEach(s => {
    html += renderDetailSection(s);
  });
  html += `</article>`;
  return html;
}

function renderStudents() {
  const grid = document.getElementById('currentStudentsGrid');
  if (!grid) return;
  grid.innerHTML = currentStudents.map(s => {
    const nameHtml = s.link ? `<a href="${s.link}" target="_blank" rel="noreferrer">${s.name}</a>` : s.name;
    const emailHtml = s.email ? `<a href="mailto:${s.email}">${s.email}</a>` : '<span class="student-meta--placeholder">邮箱待补充</span>';
    return `<article class="student-card"><div class="student-card-head"><div class="student-name">${nameHtml}</div><div class="student-year">${s.year}</div></div><p class="student-meta${s.research ? '' : ' student-meta--placeholder'}">${s.research || '研究方向待补充'}</p><p class="student-meta">${emailHtml}</p></article>`;
  }).join('');
}

function renderGraduates() {
  const container = document.getElementById('graduateGroups');
  if (!container) return;
  container.innerHTML = graduates.map(g => `<section class="graduate-group"><h3 class="graduate-group-title">${g.year}</h3><div class="graduate-list">${g.members.map(m => `<span class="graduate-item"><span class="graduate-name">${m.n}</span><span class="graduate-dest">${m.d}</span></span>`).join('')}</div></section>`).join('');
}

function renderPapers() {
  const stack = document.getElementById('paperStack');
  if (stack) {
    stack.innerHTML = featuredPapers.map(p => `<article class="paper-row"><img class="paper-figure" src="${p.img}" alt="${p.alt}"><div class="paper-row-body"><p class="paper-cite">${p.citeHtml}</p><p class="paper-summary">${p.summary}</p><div class="paper-links"><a class="paper-link" href="${p.paper}" target="_blank" rel="noreferrer">${icons.doc}Paper</a><a class="paper-link" href="${p.code}" target="_blank" rel="noreferrer">${icons.code}Code</a></div></div></article>`).join('');
  }
  const otherList = document.getElementById('otherPapersList');
  if (otherList) {
    otherList.innerHTML = otherPapers.map(p => `<li>${p}</li>`).join('');
  }
}

function renderPatents() {
  const list = document.getElementById('patentsList');
  if (list) {
    list.innerHTML = patents.map(p => {
      const [title, rest] = p.split('专利号：');
      const [number, pub] = (rest || '').split('授权公告号：');
      return `<div class="patent-row"><div class="patent-title">${title.trim()}</div><div class="patent-number">专利号：${(number || '').trim()}</div><div class="patent-pub">授权公告号：${(pub || '').trim()}</div></div>`;
    }).join('');
  }
}

function renderCarousel(trackId, dotsId, data) {
  const track = document.getElementById(trackId);
  if (!track) return;
  track.innerHTML = data.map(a => `<div class="carousel-slide"><img src="${a.img}" alt="${a.alt}"><div class="carousel-caption"><div class="carousel-caption-title">${a.title}</div><div class="carousel-caption-date">${a.date}</div></div></div>`).join('');
  const dots = document.getElementById(dotsId);
  if (dots) {
    dots.innerHTML = data.map((_, i) => `<div class="carousel-dot${i === 0 ? ' is-active' : ''}" data-carousel="${trackId}" data-index="${i}"></div>`).join('');
  }
}

// === INTERACTION LOGIC ===

// Tabs
document.addEventListener('click', function(e) {
  const btn = e.target.closest('[data-tab-target]');
  if (!btn) return;
  const group = btn.dataset.tabGroup;
  const target = btn.dataset.tabTarget;
  document.querySelectorAll(`[data-tab-group="${group}"].tab-btn`).forEach(b => b.classList.remove('is-active'));
  btn.classList.add('is-active');
  document.querySelectorAll(`[data-tab-group="${group}"].tab-panel`).forEach(p => {
    p.classList.remove('is-active');
    p.hidden = true;
  });
  const panel = document.getElementById(target);
  if (panel) { panel.classList.add('is-active'); panel.hidden = false; }
});

// Research detail navigation
let activeResearchKey = null;
document.addEventListener('click', function(e) {
  const card = e.target.closest('[data-research-target]');
  if (card) {
    const key = card.dataset.researchTarget;
    showResearchDetail(key, card);
    return;
  }
  const back = e.target.closest('[data-research-back]');
  if (back) {
    hideResearchDetail();
    return;
  }
});

function showResearchDetail(key, triggerEl) {
  const overview = document.getElementById('researchOverview');
  const container = document.getElementById('researchDetailContainer');
  if (!overview || !container) return;
  overview.classList.add('is-hidden');
  container.innerHTML = renderResearchDetail(key);
  activeResearchKey = key;
  const title = container.querySelector('.detail-hero-title');
  if (title) title.focus();
  window.scrollTo({ top: document.getElementById('research').offsetTop - 80, behavior: 'smooth' });
}

function hideResearchDetail() {
  const overview = document.getElementById('researchOverview');
  const container = document.getElementById('researchDetailContainer');
  if (!overview || !container) return;
  overview.classList.remove('is-hidden');
  container.innerHTML = '';
  activeResearchKey = null;
  const triggerCard = document.querySelector(`[data-research-target]`);
  if (triggerCard) triggerCard.focus();
}

// Carousel
const carousels = {};
function getCarousel(trackId, data) {
  if (!carousels[trackId]) {
    let index = 0;
    carousels[trackId] = {
      getIndex: () => index,
      setIndex: (i) => { index = Math.max(0, Math.min(data.length - 1, i)); updateCarousel(trackId, data); },
      next: () => { index = Math.min(data.length - 1, index + 1); updateCarousel(trackId, data); },
      prev: () => { index = Math.max(0, index - 1); updateCarousel(trackId, data); }
    };
  }
  return carousels[trackId];
}
function updateCarousel(trackId, data) {
  const track = document.getElementById(trackId);
  if (!track) return;
  const c = carousels[trackId];
  if (!c) return;
  track.style.transform = `translateX(-${c.getIndex() * 100}%)`;
  const dots = document.querySelectorAll(`[data-carousel="${trackId}"]`);
  dots.forEach((d, i) => d.classList.toggle('is-active', i === c.getIndex()));
}

document.addEventListener('click', function(e) {
  const prevBtn = e.target.closest('[id$="CarouselPrev"], [id$="carouselPrev"]');
  const nextBtn = e.target.closest('[id$="CarouselNext"], [id$="carouselNext"]');
  if (prevBtn) {
    const isAcademic = prevBtn.id.startsWith('academic');
    const trackId = isAcademic ? 'academicCarouselTrack' : 'carouselTrack';
    const data = isAcademic ? academicActivities : activities;
    getCarousel(trackId, data).prev();
  }
  if (nextBtn) {
    const isAcademic = nextBtn.id.startsWith('academic');
    const trackId = isAcademic ? 'academicCarouselTrack' : 'carouselTrack';
    const data = isAcademic ? academicActivities : activities;
    getCarousel(trackId, data).next();
  }
  const dot = e.target.closest('.carousel-dot');
  if (dot) {
    const trackId = dot.dataset.carousel;
    const data = trackId === 'academicCarouselTrack' ? academicActivities : activities;
    getCarousel(trackId, data).setIndex(parseInt(dot.dataset.index));
  }
});

document.addEventListener('keydown', function(e) {
  const carousel = e.target.closest('.carousel') || document.activeElement?.closest('.carousel');
  if (!carousel) return;
  const track = carousel.querySelector('.carousel-track');
  if (!track) return;
  const data = track.id === 'academicCarouselTrack' ? academicActivities : activities;
  const c = getCarousel(track.id, data);
  if (e.key === 'ArrowLeft') c.prev();
  if (e.key === 'ArrowRight') c.next();
});

// Sticky nav + scroll spy
const nav = document.getElementById('mainNav');
const navLinks = document.querySelectorAll('.nav-links .nav-link');
const sections = ['hero','faculty','research','students','publications','academic','activities'];

function updateNav() {
  const scrollY = window.scrollY;
  nav.classList.toggle('is-scrolled', scrollY > 20);
  let current = '';
  for (const id of sections) {
    const el = document.getElementById(id);
    if (el && el.offsetTop - 100 <= scrollY) current = id;
  }
  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    link.classList.toggle('is-active', href === '#' + current);
  });
}

window.addEventListener('scroll', updateNav, { passive: true });

// Mobile menu
const hamburger = document.getElementById('navHamburger');
const mobileMenu = document.getElementById('navMobileMenu');
if (hamburger && mobileMenu) {
  hamburger.addEventListener('click', () => {
    const open = mobileMenu.classList.toggle('is-open');
    hamburger.setAttribute('aria-expanded', open);
  });
  mobileMenu.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.remove('is-open');
      hamburger.setAttribute('aria-expanded', 'false');
    });
  });
}

// === INIT ===
document.addEventListener('DOMContentLoaded', function() {
  renderStudents();
  renderGraduates();
  renderPapers();
  renderPatents();
  renderCarousel('carouselTrack', 'carouselDots', activities);
  renderCarousel('academicCarouselTrack', 'academicCarouselDots', academicActivities);
  getCarousel('carouselTrack', activities);
  getCarousel('academicCarouselTrack', academicActivities);
  updateNav();
});
