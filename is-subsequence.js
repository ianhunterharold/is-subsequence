/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {

    // is t the same order as S
    // first thought, go through s and t at the same time seeing if they are in order. 

    // edge if either length is zero/ doesnt exist 

    // edge case handling for ZERO
    // if t is a blank string => false 
    // if s is a blank string => true 
    //  if both are no length, => true 
    if (!t.length && !s.length) {
        return true;
    }
    if (!t.length) {
        return false
    }
    if (!s.length) {
        return true
    }

    let i = 0;
    let j = 0;
   
    while (i < s.length && j < t.length) {
        if (s[i] === t[j]) {
            i++;
        }
        j++;
    }

    return i === s.length;
};
// while loops perform terribly