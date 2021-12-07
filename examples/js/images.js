var config = {
    default: {
        name: 'l', 
        unit: 'mm', 
        size: [297, 210],
        font: {
            name: 'Mplus2-Regular', 
            variant: 'normal',
            size: 16,
            color: [0,0,255]
        },
    },
    layers: [
        {
            position: [0, 0],
            image: "https://i.imgur.com/R09pXIX.png",
            type: "png",
        },
        {
            position: [70, 48],
            text: "たなか　たろう",
            font: {
                url: "test/reference/MouhitsuBold.ttf",
                name: 'Mouhitsu', 
                variant: 'bold',
                color: [255, 0, 0],
                size: 16
            },
        },
        {
            position: [48, 90],
            text: "商品１",
        },
        {
            position: [48, 103],
            text: "商品2",
        },
        {
            position: [48, 116],
            text: "商品3",
        },
        {
            position: [70, 148],
            text: "請求者　太郎",
            font: {
                name: 'Roboto-Regular', 
                variant: 'normal',
                color: [0, 255, 0],
                size: 20
            },
        },
    ]
}











// 下記はUtilとして利用可能
// A4 横
var doc = new jsPDF(
    config.default.name,
    config.default.unit,
    config.default.size
);

render(doc, config);

function render(doc, config) {

    // A4 縦
    // new jsPDF('p', 'mm', [297, 210]);
    console.log("Supported fonts:", doc.getFontList());

    config.layers.forEach(el => {
        debugger
        if (el.text) {
            el.font = Object.assign(
                {}, 
                config.default.font,
                el.font || {}, 
            );
            renderText(doc, el)
        } else if (el.image) {
            renderImage(doc, el)
        } else {
            console.error("Not support yet", el);
        }
    });
}

function renderText(doc, el) {
    if (el.font.url) {
        doc.addFont(
            el.font.url,
            el.font.name, 
            el.font.variant);
    }
    doc.setFont(
        el.font.name, 
        el.font.variant);
    doc.setFontSize(el.font.size);
    if (el.font.color) {
        doc.setTextColor(
            el.font.color[0],
            el.font.color[1],
            el.font.color[2],
        );
    }
    doc.text(
        el.text, 
        el.position[0], 
        el.position[1]
    );
}
function renderImage(doc, el) {
    doc.addImage(
        el.image, 
        el.type, 
        el.position[0], 
        el.position[1]);

}


// 注：
// font追加方法
// 1) fontのttfファイルを下記のURLでjsをbase64に変換する。例：
//    https://rawgit.com/MrRio/jsPDF/master/fontconverter/fontconverter.html
// 2) 上記のjsをhtmlのscriptタグとしてimportする。例：
// 	<script type="module"  src="./test/reference/fonts/Roboto-Regular-normal.js"></script>
