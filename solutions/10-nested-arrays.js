// BEGIN
const getSuperSeriesWinner =  (series) => {
    let result_canada = 0;
    let result_ussr = 0;    
    for (const game of series) {       
        if (game[0] - game[1] > 0)  {
            result_ussr = result_ussr + 1;
        } else if (game[0] - game[1] < 0){
            result_canada = result_canada + 1;
        } 
    };
    
    if (result_canada > result_ussr) {
        return 'ussr';
    } else if (result_canada < result_ussr) {
        return 'canada';
    } else if (result_canada === result_ussr) {
        return null;
    };

};

export default getSuperSeriesWinner;
// END