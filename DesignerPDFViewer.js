// When you select a contiguous block of text in a PDF viewer, the selection is highlighted with a blue rectangle. In this PDF viewer, each word is highlighted independently. For example:

// In this challenge, you will be given a list of letter heights in the alphabet and a string. Using the letter heights given, determine the area of the rectangle highlight in  assuming all letters are  wide.

// For example, the highlighted . Assume the heights of the letters are  and . The tallest letter is  high and there are  letters. The hightlighted area will be  so the answer is .
function designerPdfViewer(arr, word) {
    let maxLetterVal = 0;
    word = word.split('');
    let length = word.length;
    let hash = {
        a:'',
        b:'',
        c:'',
        d:'',
        e:'',
        f:'',
        g:'',
        h:'',
        i:'',
        j:'',
        k:'',
        l:'',
        m:'',
        n:'',
        o:'',
        p:'',
        q:'',
        r:'',
        s:'',
        t:'',
        u:'',
        v:'',
        w:'',
        x:'',
        y:'',
        z:''
  };
    
    let key = Object.keys(hash); // => [a,b,..]
    for(let i = 0; i < arr.length; i++) {
        hash[key[i]] = arr[i];
    }

    for(let i = 0; i < word.length; i++) {  
        if(hash[word[i]] > maxLetterVal) {
            maxLetterVal = hash[word[i]]
        }
    }
    
    return maxLetterVal * length;


}