import { storePlayerItem, chooseComputerItem, compareItems, resetItems, changeCheatStatus } from './helper'


test('Computer is always choosing the winning item if it cheats', () => {
  const playerItem = "Moai"

  expect(chooseComputerItem(true, "Moai")).toBe('Tree')
  expect(chooseComputerItem(true, "Axe")).toBe('Moai')
  expect(chooseComputerItem(true, "Tree")).toBe('Axe')

})

test('Change cheating status when function is executed', () => {
  const initialStatus = {cheating: true}

  initialStatus.cheating = changeCheatStatus(initialStatus.cheating)
  expect(initialStatus.cheating).toBe(false)

  initialStatus.cheating = changeCheatStatus(initialStatus.cheating)
  expect(initialStatus.cheating).toBe(true)

})
/**
 * By default the computer is cheating (function)

When we click on a player button, something happens (event)
store the value of the player (item) (function)

if the computer is cheating (function)
Computer chooses to always win against player stored item (function)
if not
computer chooses randomly (function)

compare the computer item and player item (function)

Show who won (function)
reset the items if we click on the player head (event)
change cheat status we when click on the computer head (event)
 */