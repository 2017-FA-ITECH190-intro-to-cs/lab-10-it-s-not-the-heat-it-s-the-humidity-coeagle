function calculateDewPoint (temp, humidity)
{
    var dewp;
    dewp = temp-(9(100 - humidity)/25);
    return dewp; 
}

function calculateWindChill (temp, wind)
{
    var winchill;
    winchill = Math.pow (wind,0.16) * 35.74 + 0.6215 * temp + (0.4275 * temp - 35.75) ;
    return winchill;
    
}

 







