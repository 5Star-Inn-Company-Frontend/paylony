import {Bar} from "react-chartjs-2"
import 'chart.js/auto';
export const BarChart =({
    data
})=>{
    const options = {
        responsive: true,
        maintainAspectRatio: false
      };
    return(
        <Bar data={data} options={options}/>
    )
}