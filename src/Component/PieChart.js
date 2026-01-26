import { PieChart } from '@mui/x-charts/PieChart';
import { useContext_ } from '../useContext/UseContext';


export default function Label_() {
  const{sum,exp,result}=useContext_()
    const safeResult = result > 0 ? result : 0;
    const safeExp = Math.abs(exp);
    const data = [
  { label: 'Income', value: sum, color: '#A3485A' },
  { label: 'Expense', value: safeExp, color: '#F5DAA7' },
  { label: 'Remain', value: safeResult, color: '#662222' },
];
console.log({ sum, exp, result });

const settings = {
  margin: { right: 5 },
  width: 300,
  height: 300,
  hideLegend: true,
};

  return (
    <PieChart
      series={[{ innerRadius: 50, outerRadius: 100, data, arcLabel: 'value' ,arcLabelMinAngle: 6,}]}
      {...settings}
    />
  );
}
