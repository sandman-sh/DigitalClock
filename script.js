const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");
const infoPage = document.getElementById('info-page')
const infoBtn = document.getElementById('info')
const closeInfo = document.getElementById('closeInfoBtn');
const settingPage = document.getElementById('setting-page')
const settingBtn = document.getElementById('setting')
const closeSetting = document.getElementById('closeSettingBtn')
const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul","Aug", "Sep", "Oct", "Nov", "Dec"];
const date = document.getElementById('date')
const format = document.getElementById("format");
const day = document.getElementById("days");
const time = () => {
  const now = new Date();
  const d = now.getDate()
  const m = month[now.getMonth()]
  const y = now.getFullYear()
  const fullDate = `${d} ${m} ${y}`
  const rawHour = now.getHours()
  const hours12 = rawHour % 12 || 12;
  const ampm = rawHour  >= 12 ? "PM" : "AM";
  hours.textContent = String(hours12).padStart(2, 0);
  minutes.textContent = String(now.getMinutes()).padStart(2, 0);
  seconds.textContent = String(now.getSeconds()).padStart(2, 0);
  day.textContent = days[now.getDay()];
  format.textContent = String(ampm);
  
  date.textContent = String(fullDate)
};
setInterval(time, 1000);
const PageOpenClose =()=>{
    settingBtn.addEventListener('click',(event)=>{
        settingPage.style.setProperty('display','flex')
    }),
    closeSetting.addEventListener('click',(event)=>{
        settingPage.style.removeProperty('display')
    }),
    infoBtn.addEventListener('click',(event)=>{
        infoPage.style.setProperty('display','flex')
    }),
    closeInfo.addEventListener('click',(event)=>{
        infoPage.style.removeProperty('display')
    })
}
PageOpenClose()