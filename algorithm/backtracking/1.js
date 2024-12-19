
function letterCombinations(digits) {
  const map={
    '2' :'abc',
    '3':'def',
    '4':'ghi',
    '5':'jkl',
    '6':'mno',
    '7':'pqrs',
    '8':'tuv',
    '9':'wxyz',
  }
  const relut=[]
  if(digits.length===0)
    return relut
const dfs=(curser,i)=>{
    if(i>digits.length-1){
        return relut.push(curser)
    }
    const letters=map[digits[i]]
    for(const lets of letters){
        dfs(curser+lets,i+1)
    }
}
dfs('',0)
return relut
}
