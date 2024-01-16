const Longregex = /(\d+)° (\d+)' (\d+\.\d+)\" ([NS])/
const Latregex = /(\d+)° (\d+)' (\d+\.\d+)\" ([EW])/
export const returnDecimalLongitude =(val)=>{
    const match = val.match(Longregex);
    if(match){
        const degrees = parseFloat(match[1]);
        const min = parseFloat(match[2]);
        const sec = parseFloat(match[3]);
        const direction = match[4];
        const sign = direction ==='N'?1:-1;
        const decimalDeg = sign * (degrees +(min/60)+(sec/3600))
        console.log(decimalDeg);
        return decimalDeg;
    }
}

export const returnDecimalLatitude =(val)=>{
    const match = val.match(Latregex);
    if(match){
        const degrees = parseFloat(match[1]);
        const min = parseFloat(match[2]);
        const sec = parseFloat(match[3]);
        const direction = match[4];
        const sign = direction ==='E'?1:-1;
        const decimalDeg = sign * (degrees +(min/60)+(sec/3600))
        console.log(decimalDeg);
        return decimalDeg;
    }
}