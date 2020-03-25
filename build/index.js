"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MatchReader_1 = require("./MatchReader");
var Summary_1 = require("./Summary");
var reader = MatchReader_1.MatchReader.fromCsv('football.csv');
reader.load();
// const summary = new Summary(new WinsAnalysis('Newcastle'), new HtmlReport());
var summary = Summary_1.Summary.winsAnalysisWithHtmlReport('Man United');
summary.buildAndPrintReport(reader.matches);
