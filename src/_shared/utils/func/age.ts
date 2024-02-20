export function calculateAge(dateOfBirth: Date): number | null {
  if (!dateOfBirth) return null
  // Get today's date
  const today = new Date()
  console.log(dateOfBirth)

  // Get the difference (in milliseconds) between the current date and date of birth
  var diffInMilliSeconds = today.getTime() - new Date(dateOfBirth)?.getTime()

  // 1 year = 365.25 days
  var diffInYears = diffInMilliSeconds / 1000 / 60 / 60 / 24 / 365.25

  // Return the difference in years
  return Math.floor(Math.round(diffInYears))
}
