// A4 横
var doc = new jsPDF('l', 'mm', [297, 210]);
// A4 縦
// new jsPDF('p', 'mm', [297, 210]);
console.log(doc.getFontList());

doc.addImage("https://i.imgur.com/R09pXIX.png", "PNG", 0, 0);

doc.addFont("test/reference/MouhitsuBold.ttf", "Mouhitsu", "bold");
doc.setFont("Mouhitsu", "bold"); // 文字のフォント

doc.setFontSize(20); // 文字サイズ
doc.setTextColor(255,0,0); // 文字色

doc.text("たなか　たろう", 70, 48); // 文字と表示の座標

doc.setFont("Roboto-Regular", "normal"); // 文字のフォント
doc.setFontSize(25);
doc.setTextColor(0,0,255); // 文字色
doc.text("日本語テスト(Roboto-Regular normal)", 0, 25);

// 'Mplus2-Regular', 'normal'
doc.setFont('Mplus2-Regular', 'normal'); // 文字のフォント
doc.setFontSize(25);
doc.setTextColor(0,0,255); // 文字色
doc.text("フォントはMplus2-Regular使う", 0, 125);




// https://jsfiddle.net/Domt301/bu9db10d/
// <div id="example1"></div>
// <script src="/js/pdfobject.min.js"></script>
// <script src="/js/jspdf.min.js"></script>

// <script>
//   PDFObject.embed(createPDF(), "#example1");
            
//   function createPDF() {
//     var doc = new jsPDF();

//     doc.setFont("helvetica");
//     doc.setFontStyle("bold");
                
//     doc.setFontSize(20);
//     doc.text('TEST PDF...', 105, 20, 'center');

//     return doc.output('datauristring');    
//   }
// </script>
