export default function average(ap1, ap2, ap3){

  const result = ((Number(ap1) * 0.3) + (Number(ap2) * 0.3) + (Number(ap3) * 0.4)).toFixed(1);
  
  if(ap1 && ap2 && ap3 ){
    console.log(`${Number(ap1).toFixed(1)}, ${Number(ap2).toFixed(1)}, ${Number(ap3).toFixed(1)}`);

    if( result >= 5 ){
      return {
        result: `Sua média é ${result} vc passou!`
      }
    }
    else{
      return {
        result: `Sua média é ${result} vc não passou!`
      }
    }

  }

  if(ap2 === '' && ap3 === ''){
    ap2 = 0;
    ap3 = 0;
    const valueNota2AndNota3 = (5 - (Number(ap1) * 0.3)) / 0.7;

    ap2 = valueNota2AndNota3;
    ap3 = valueNota2AndNota3;
  }

  if(ap3 === ''){
    ap3 = 0;
    ap3 = (5 - (ap1 * 0.3) - (ap2 * 0.3)) / 0.4;
  }

  // console.log(`${ap1.toFixed(1)}, ${ap2.toFixed(1)}, ${ap3.toFixed(1)}`);

  return {
    ap1: Number(ap1).toFixed(1),
    ap2: Number(ap2).toFixed(1),
    ap3: Number(ap3).toFixed(1),
  }
  
}

average(5,0,0);