# Daily Task Planner

An app desgined to allow a user to add tasks they need to complete in a day, and how much time should be spent on each.

The app utilizes Local Storage to save activites between visits

# Tech/ Frameworks

- React
- Styled Components
- React Icons

# Color Palette

https://coolors.co/palette/4c00ff-fefaff-009ff5-4169e1-1f305e-4c597e

# Link to Live Application

https://daily-task-planner-mw.netlify.app/

# Notes

## Todo

- Edit Button

- Add out level sections
  What I have now could be a sub section
  Use for Gym splits etc

- Add tick box to mark task as done

- Replace initialData with a prompt to make a user create a new activity

## Maybe

- When an activity is complete, send it to the bottom of the list maybe

- Add a stopwatch for in-between gym sets

- Have a congratz screen for completeing a day

- Make activities dragable to re-order

- Add ability to toggle timers on/ off

- Drop Add Activity button down, next to Reset

- Reset button for each activity ??

- Swap over from LocalStore to a DB

## Bugs

- Id's are not unquie enough. Every refresh causes the id to go back to the same first ID
  uuid maybe

- When you refresh, the timers go back to full duration

If a user inputs 00 into one of the time slots, it will display triple 0's
