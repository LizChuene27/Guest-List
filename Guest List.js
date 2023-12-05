// initialize an empty array to store guest names
const guestList = [];

// prompt the user to input the guest names
while (guestList.length < 10) {
  const guestName = prompt('Enter the name of a guest to invite:');
  if (guestName === null) {
    // user clicked cancel or closed the prompt dialog
    break;
  }
  if (guestName.trim() === '') {
    // user entered an empty string or just spaces
    alert('Please enter a valid name.');
    continue;
  }
  guestList.push(guestName.trim());
  if (guestList.length === 10) {
    alert('You have already added 10 people to your guest list.');
  }
}

// output the final guest list
if (guestList.length === 0) {
  console.log('No guests have been invited.');
} else {
  console.log(`Guest list (${guestList.length} guests):\n${guestList.join('\n')}`);
}

// If the user tried to add more than 10 names, prompt them to replace someone on the list
if (guestList.length === 10) {
    let extraName = prompt('You have already added 10 people to your guest list. Would you like to replace someone on the list with this person? (y/n)');
    if (extraName.toLowerCase() === 'y') {
      let guestListString = guestList.join(', ');
      let replaceName = prompt(`Current guest list: ${guestListString}. Who would you like to replace?`);
      let index = guestList.indexOf(replaceName);
      if (index === -1) {
        alert(`${replaceName} is not in your guest list.`);
      } else {
        guestList.splice(index, 1, extraName);
      }
    } else {
      alert(`Final guest list: ${guestList.join(', ')}`);
    }
  } else {
    alert(`Final guest list: ${guestList.join(', ')}`);
  }