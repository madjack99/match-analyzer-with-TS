"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CsvFileReader_1 = require("./CsvFileReader");
var MatchReader_1 = require("./MatchReader");
var Summary_1 = require("./Summary");
var csvFileReader = new CsvFileReader_1.CsvFileReader('football.csv');
var reader = new MatchReader_1.MatchReader(csvFileReader);
reader.load();
// const summary = new Summary(new WinsAnalysis('Newcastle'), new HtmlReport());
var summary = Summary_1.Summary.winsAnalysisWithHtmlReport('Man United');
summary.buildAndPrintReport(reader.matches);
