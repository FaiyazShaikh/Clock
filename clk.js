         let hr = document.querySelector('#hr');
         let mn = document.querySelector('#mn');
         let sc = document.querySelector('#sc');

         setInterval(()=>{

             let day = new Date();
             let hh = day.getHours() * 30;
             let mm = day.getMinutes() * 6;
             let ss = day.getSeconds() * 6;
             
             hr.style.transform = `rotateZ(${hh}deg)`;
             mn.style.transform = `rotateZ(${mm}deg)`;
             sc.style.transform = `rotateZ(${ss}deg)`;

             let hour = document.getElementById('hour');
             let min = document.getElementById('min');
             let sec = document.getElementById('sec');
             let ampm = document.getElementById('ampm');

             let h = new Date().getHours();
             let m = new Date().getMinutes();
             let s = new Date().getSeconds();

             let ap = (h>=12) ? "PM" : "AM"
             h = (h>12) ?  h - 12 : h;
             h = (h<10) ? "0" + h : h;
             m = (m<10) ? "0" + m : m;
             s = (s<10) ? "0" + s : s;
             
             hour.innerHTML = h;
             min.innerHTML = m;
             sec.innerHTML = s;
             ampm.innerHTML = ap;

             let days = document.getElementById('d');
             let month = document.getElementById('m');
             let year = document.getElementById('y');

             let d = new Date().getDate();
             let mon = new Date().getMonth();
             let y = new Date().getFullYear();

             days.innerHTML = d;
             month.innerHTML = mon;
             year.innerHTML = y;

             let dayz = document.getElementById('day');
             let da = new Date().getDay();

             da = (da == 0) ? 'Sunday' : (da == 1) ? 'Monday': (da == 2) ? 'Tuesday': (da == 3) ? 'Wednesday':(da == 4) ? 'Thursday':(da == 5) ? 'Friday':(da == 6) ? 'Saturday':1;

             dayz.innerHTML = da;

            })
