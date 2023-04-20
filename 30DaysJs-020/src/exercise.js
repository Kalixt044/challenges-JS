export function arrayModified() {
  Array.prototype.myFilter = function (callback) {

    const output = []

    for (const x of this) 
      if (callback(x) === true) output.push(x)    

    return output

  }  
}
