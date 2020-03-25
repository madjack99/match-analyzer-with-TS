import { CsvFileReader } from './CsvFileReader';
import { MatchReader } from './MatchReader';
import { Summary } from './Summary';
import { WinsAnalysis } from './analyzers/WinsAnalysis';
import { HtmlReport } from './reportTargets/HtmlReport';

const reader = MatchReader.fromCsv('football.csv');
reader.load();

// const summary = new Summary(new WinsAnalysis('Newcastle'), new HtmlReport());
const summary = Summary.winsAnalysisWithHtmlReport('Man United');
summary.buildAndPrintReport(reader.matches);
