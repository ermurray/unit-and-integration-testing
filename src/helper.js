export const storePlayerItem = () => {

}

export const chooseComputerItem = (cheating, playerItem) => {
  if (cheating) {
    switch(playerItem){
      case "Moai":
        return "Tree"
      case "Axe":
        return "Moai"
      case "Tree":
        return "Axe"
      default:
      break
    }
  }
  else {
    const choices = ["Moai", "Axe", "Tree"]
    const randomIndex = Math.floor(Math.random() * choices.length)
    return choices[randomIndex]
  }
}

export const compareItems = () => {

}

export const resetItems = () => {

}

export const changeCheatStatus = (cheatStatus) => {
  return cheatStatus ? false : true
}