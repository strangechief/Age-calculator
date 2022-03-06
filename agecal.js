function ageCalc() {
    /* This part makes it so that the script only runs when the button is pushed by the user.*/
       
       var dateToday = new Date();
    
       var dayToday = dateToday.getDate();
       var monthToday = dateToday.getMonth()+1;
       var yearToday = dateToday.getFullYear();
    
       /* this part is to tell the program what the date is at the time the user is using the program. */
    
       var dayBorn = prompt("What day \(D\) were you born?");
       var monthBorn = prompt("What month \(M\) were you born?");
       var yearBorn = prompt("What year \(YYYY\) were you born?");
    
       /* this part is to tell the program to prompt an alert (entry window) to collect data from the user and then to set variables based on user input */
    
       var yearAge = (yearToday - yearBorn); 
    
       var monthAge = (monthToday - monthBorn);
    
       var dayAge = (dayToday - dayBorn); 
    
       if(monthAge == 0) /*this part is to assess whether the user has or will recently have a birthday. If the month today is the same as the user's birth month, this will launch logic. This logic states that: if the day entered equals the day today, wish the user a happy birthday. If NOT but the day entered is in the past, tell the user you hope they had a great birthday.  If NOT but the day entered is in the future, tell the user they will soon be +1 year older.*/
       {
         if(dayAge == 0)
         {alert("HAPPY BIRTHDAY! Today you are " + yearAge + "!");
         }
         else if(dayAge < 0) 
         {alert("You are " + (yearAge - 1) + " years old, but nearly " + yearAge + "!");
         }
         else 
         {alert("You are " + yearAge + " years old! Hope you had a great birthday!");
         }
       }
    
       /* this part defines what age the user is based on whether their birthday is in the past or future. If the month is in the past, they are 1 year younger than !thisYear minus !birthYear. If the month is in the future, their age in years is !thisYear minus !birthYear. */
    
       else if(monthAge < 0) {
         alert("You are " + (yearAge - 1) + " years old!");
       }
    
       else {
         alert("You are " + yearAge + " years old!");
       }
    
     }