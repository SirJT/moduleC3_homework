function randomObj (obj) {
  for (let f in obj) {
    if (obj.hasOwnProperty(f)) {
      console.log(f, obj[f]);
      
    }
  }
}