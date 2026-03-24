// BEGIN (write your solution here)
const getWeekends = (str = 'long') => {
    let weekDayF = ['saturday', 'sunday'];
    let weekDay = ['sat', 'sun']; 
    if (str === 'long') {
      return weekDayF;  
    } 
    else if (str === 'short') {
      return weekDay;  
    }      
};

export { getWeekends };
// END
