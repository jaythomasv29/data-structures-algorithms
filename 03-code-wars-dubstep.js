function songDecoder(song){
  const filtered = song.split("WUB").filter(ele => {
    return ele != ''
  })
  return filtered.join(" ")
}

const songDecoder2 = (song) => {
  return song.replace(/WUB+/g, ' ')
}
// "A B C","WUB should be replaced by 1 space");
console.log(songDecoder("AWUBBWUBC"))
// "A B C","multiples WUB should be replaced by only 1 space");
console.log(songDecoder("AWUBWUBWUBBWUBWUBWUBC") )
// "A B C","heading or trailing spaces should be removed");
console.log(songDecoder("WUBAWUBBWUBCWUB")) 
console.log(songDecoder2("WUBWEWUBAREWUBWUBTHEWUBCHAMPIONSWUBMYWUBFRIENDWUB"))