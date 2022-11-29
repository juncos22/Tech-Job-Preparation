function clockMinuteAdder(time, minutesToAdd) {
  // Your code here:

  // const hours = time[0] + time[1] // 12
  // const minutes = time[3] + time[4] // 05
  const [hours, minutes] = time.split(':')

  let totalMinutes = parseInt(minutes) + minutesToAdd // 5 + 1440 = 1445
  let totalHours = parseInt(hours) + Math.floor(totalMinutes / 60) // 12 + 24 = 36

  totalMinutes = totalMinutes % 60 // 5
  totalHours = ((totalHours - 1) % 12) + 1 // ((36 - 1) % 12) + 1 = (35 % 12) + 1 => 11 + 1 => 12

  if (totalHours < 10) totalHours = '0' + totalHours // 
  if (totalMinutes < 10) totalMinutes = '0' + totalMinutes // '05'

  return `${totalHours}:${totalMinutes}`
}

console.log(clockMinuteAdder("09:00", 20)) // ("09:20");
console.log(clockMinuteAdder("01:30", 30)) // ("02:00");
console.log(clockMinuteAdder("12:05", 100)) // ("01:45");
console.log(clockMinuteAdder("06:30", 90)) // ("08:00");
console.log(clockMinuteAdder("12:05", 1440)) // ("12:05");


module.exports = clockMinuteAdder