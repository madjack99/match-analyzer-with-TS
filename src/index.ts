import { CsvFileReader } from './CsvFileReader';
import { MatchReader } from './MatchReader';
import { Summary } from './Summary';
import { WinsAnalysis } from './analyzers/WinsAnalysis';
import { ConsoleReport } from './reportTargets/ConsoleReport';

const csvFileReader = new CsvFileReader('football.csv');
const reader = new MatchReader(csvFileReader);
reader.load();

const summary = new Summary(new WinsAnalysis('Newcastle'), new ConsoleReport());
summary.buildAndPrintReport(reader.matches);
