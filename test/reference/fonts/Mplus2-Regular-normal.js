﻿// import { jsPDF } from "jspdf"
// const jsPDF = window.jsPDF
var callAddFont = function () {
this.addFileToVFS('Mplus2-Regular-normal.ttf', font);
this.addFont('Mplus2-Regular-normal.ttf', 'Mplus2-Regular', 'normal');
};
jsPDF.API.events.push(['addFonts', callAddFont])